import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './ScrollBar.module.scss';

interface ScrollBarProps {
  'aria-label'?: string;
  containerHeight: number;
  totalHeight: number;
}

interface ScrollBarHandle {
  setPosition: (offset: number) => void;
}

export type ScrollBarType = {
    setPosition: (offset: number) => void;
};

const ScrollBar = forwardRef<ScrollBarHandle, ScrollBarProps>((props, ref) => {    
    const THUMB_HEIGHT = 25;
    const thumbRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { 'aria-label': ariaLabel, containerHeight, totalHeight } = props;

    // Exposing the custom methods (setPosition) through `ref`
    useImperativeHandle(ref, () => ({
        setPosition: (offset: number) => {
            if (thumbRef.current) {
                thumbRef.current.style.top = `${(offset * (containerHeight - THUMB_HEIGHT)) / totalHeight}px`;
            }
        },
    }));

    return (
        <div 
            aria-label={ariaLabel} 
            ref={containerRef}  // Standard DOM ref for the container
            className={styles.container} 
            style={{ display: 'none' }}
        >
            <div 
                className={styles.thumb} 
                style={{ '--thumb-height': `${THUMB_HEIGHT}px` } as React.CSSProperties}
                ref={thumbRef}
            />
        </div>
    );
}); 

ScrollBar.displayName = 'ScrollBar';

export default ScrollBar;
