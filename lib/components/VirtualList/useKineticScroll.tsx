import { useEffect, useRef, useCallback } from 'react';
import Hammer from 'hammerjs';
import { ScrollBarType } from './ScrollBar';

type UseKineticScrollProps = {
  viewRef: React.RefObject<HTMLDivElement>;
  indicatorRef: React.RefObject<ScrollBarType>;
  totalHeight: number;
  onScrollUpdate: (offset: number) => void;
  onScrollStop: (offset: number) => void;
  rowHeight: number;
  debug?: boolean;
};

const useKineticScroll = ({
  viewRef,
  indicatorRef,
  totalHeight,
  onScrollUpdate,
  onScrollStop,
  rowHeight,
  debug = false,
}: UseKineticScrollProps) => {
  const offsetRef = useRef<number>(0);
  const pressedRef = useRef<boolean>(false);
  const referenceRef = useRef<number>(0);
  const minRef = useRef<number>(0);
  const maxRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const amplitudeRef = useRef<number>(0);
  const targetRef = useRef<number>(0);
  const timestampRef = useRef<number>(0);
  const tickerRef = useRef<NodeJS.Timeout | null>(null);
  const timeConstantRef = useRef<number>(325);
  const velocityThresholdRef = useRef<number>(0.02);
  const deltaThresholdRef = useRef<number>(0.5);

  const log = useCallback((...args: Parameters<typeof console.log>) => {
    if (debug) {
      console.log(...args);
    }
  }, [debug]);

  useEffect(() => {
    const view = viewRef.current;
    const indicator = indicatorRef.current;

    if (view) {
      const parentElement = view.parentElement;
      const parentHeight = parentElement ? parentElement.getBoundingClientRect().height : window.innerHeight;
      maxRef.current = totalHeight - parentHeight;

      const scroll = (y: number) => {
        // Update the scroll position using the scrollTop property for manual scroll
        const offset = Math.max(minRef.current, Math.min(y, maxRef.current));
        offsetRef.current = offset;
        
        // Scroll the container using scrollTop instead of modifying view.style.top
        view.scrollTop = offset;
        indicator?.setPosition(offset);
        onScrollUpdate(offset);
      };

      const track = () => {
        const now = Date.now();
        const elapsed = now - timestampRef.current;
        timestampRef.current = now;
        const delta = offsetRef.current - targetRef.current;
        targetRef.current = offsetRef.current;
        const velocity = (1000 * delta) / (1 + elapsed);
        velocityRef.current = 0.8 * velocity + 0.2 * velocityRef.current;
      };

      const autoScroll = () => {
        const elapsed = Date.now() - timestampRef.current;
        const delta = -amplitudeRef.current * Math.exp(-elapsed / timeConstantRef.current);

        if (Math.abs(velocityRef.current) > velocityThresholdRef.current && Math.abs(delta) > deltaThresholdRef.current) {
          scroll(targetRef.current + delta);
          requestAnimationFrame(autoScroll);
        } else {
          // Once scrolling stops, snap to the closest top row.
          const closestRow = Math.round(targetRef.current / rowHeight); 
          const newOffset = closestRow * rowHeight;
          scroll(newOffset);
          onScrollStop(newOffset);
        }
      };

      const release = () => {
        pressedRef.current = false;
        if (tickerRef.current) {
          clearInterval(tickerRef.current);
        }

        if (Math.abs(velocityRef.current) > velocityThresholdRef.current) {
          amplitudeRef.current = 0.8 * velocityRef.current;
          targetRef.current = Math.round(offsetRef.current + amplitudeRef.current);
          const snap = 50;
          targetRef.current = Math.round(targetRef.current / snap) * snap;
          targetRef.current = Math.max(minRef.current, Math.min(targetRef.current, maxRef.current));

          timestampRef.current = Date.now();
          requestAnimationFrame(autoScroll);
        } else {
          log("No momentum scrolling as velocity is too low.");

          // Snap to the center of the row (better for slow scrolling)
          const snapThreshold = rowHeight / 2;
          let closestRow;

          if (offsetRef.current % rowHeight < snapThreshold) {
            // Snap to previous row
            closestRow = Math.floor(offsetRef.current / rowHeight);
          } else {
            // Snap to next row
            closestRow = Math.ceil(offsetRef.current / rowHeight);
          }

          const newOffset = closestRow * rowHeight;
          scroll(newOffset); // Ensure scroll aligns to the center of the row
          onScrollStop(newOffset); // Trigger scroll stop event
        }
      };

      const hammer = new Hammer(view);
      hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

      hammer.on('panstart', (e) => {
        pressedRef.current = true;
        referenceRef.current = e.center.y;
        velocityRef.current = amplitudeRef.current = 0;
        targetRef.current = offsetRef.current;
        timestampRef.current = Date.now();
        if (tickerRef.current) {
          clearInterval(tickerRef.current);
        }
        tickerRef.current = setInterval(track, 50);
      });

      hammer.on('panmove', (e) => {
        if (pressedRef.current) {
          const y = e.center.y;
          const delta = referenceRef.current - y;
          referenceRef.current = y;
          if (Math.abs(delta) > 1) {
            scroll(offsetRef.current + delta);
          }
        }
      });

      hammer.on('panend', release);

      return () => {
        hammer.off('panstart', release);
        hammer.off('panmove', release);
        hammer.off('panend', release);
        hammer.destroy();
      };
    }
  }, [viewRef, totalHeight, onScrollUpdate, onScrollStop, indicatorRef, log, rowHeight]);

  const scrollToRowInternal = useCallback((rowIndex: number) => {
    const offset = rowIndex * rowHeight;
    const view = viewRef.current;
    const indicator = indicatorRef.current;
    indicator?.setPosition(offset);
    if (view) {      
      view.scrollTo({ top: offset, behavior: 'smooth' });
      offsetRef.current = offset;
    }
    // Trigger the scroll handler after the scroll position is set.
    onScrollUpdate(offset);

    // Trigger the scroll stop after the scroll reaches the target.
    const checkScrollStop = () => {
      const currentScroll = viewRef.current?.scrollTop;
      if (currentScroll === offset) {
        onScrollStop(offset);
      } else {
        // Keep checking the scroll position.
        requestAnimationFrame(checkScrollStop);
      }
    };

    // Start the scroll stop detection.
    requestAnimationFrame(checkScrollStop);
  }, [rowHeight, viewRef, indicatorRef, onScrollUpdate, onScrollStop]);

  return {
    offset: offsetRef.current,
    scrollToRow: scrollToRowInternal,
  };
};

export default useKineticScroll;
