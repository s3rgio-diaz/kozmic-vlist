import React, { useRef, useEffect, useCallback, useState, MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import useKineticScroll from './useKineticScroll';
import ScrollBar from './ScrollBar';
import styles from './wrapper.module.scss';
import usePageCache from './usePageCache';

type VirtualListApi = {
  scrollToRow: (index: number) => void,
};

interface VirtualListProps<T extends Record<string, unknown>> {
  renderCell: (rowData: T, rowIndex: number) => JSX.Element;
  rowCount: number;
  rowsPerPage?: number;
  fetchPageData: (pageIndex: number) => Promise<T[]>;
  rowHeight?: number;
  onEndReached?: () => void;
  loadMoreThreshold?: number;
  onRowDoubleClick?: (rowIndex: number, apiRef: VirtualListApi | undefined) => void;
  onTopRowChanged?: (rowIndex: number, rowData: T) => void;
  apiRef?: React.MutableRefObject<VirtualListApi | undefined>;
  hideVerticalScrollbar?: boolean;
  debug?: boolean;
}

function VirtualList<T extends Record<string, unknown>>({
  rowCount,
  fetchPageData,
  rowHeight = 50,
  onEndReached,
  loadMoreThreshold = 10,
  rowsPerPage,
  renderCell,
  onRowDoubleClick,
  onTopRowChanged,
  apiRef,
  hideVerticalScrollbar = false,
  debug = false,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef(null);
  const viewRef = useRef<HTMLDivElement | null>(null);
  const rowsRef = useRef<(HTMLDivElement)[]>([]);
  const poolSize = useRef(0);
  const topRowIndexRef = useRef(0);
  const scrollTopRef = useRef(0);

  const debugRowPool = (firstRow: number, lastRow: number) => {
      console.log(`total rows in pool: ${rowsRef.current.length}`);
      console.log(`first visible row: ${firstRow} last visible row: ${lastRow}`);
      rowsRef.current.forEach((rowElement: HTMLElement) => {      
        if (rowElement) {
          const currentRowIndex = parseInt(rowElement.dataset?.rowIndex || '0', 10); 
          console.log(`data-row-index: ${currentRowIndex}`);
          console.log(`style.transform ${rowElement.style.transform}`);
        }
      });
  }

  // Set state for viewHeight
  const [viewHeight, setViewHeight] = useState(800);

  const totalHeight = rowCount * rowHeight;

  const log = useCallback((...args: Parameters<typeof console.log>) => {
    if (debug) {
      console.log(...args);
    }
  }, [debug]);

  const renderCellContent = useCallback((
    rowElement: HTMLElement,
    rowData: T, 
    rowIndex: number
  ) => {
    const cellElement = document.createElement('div');
    const root = ReactDOM.createRoot(cellElement); 
    cellElement.style.width = '100%';
    cellElement.style.height = '100%';
    root.render(renderCell(rowData, rowIndex)); 
    rowElement.innerHTML = '';
    rowElement.appendChild(cellElement);
  }, [renderCell]);


  const handleCellContentUpdate = () => {
    rowsRef.current.forEach(async (rowElement: HTMLElement) => {
      if (rowElement) {
        const rowIndex = parseInt(rowElement.dataset?.rowIndex || '0', 10);
        const loading = !rowElement.textContent || rowElement.textContent.indexOf("Loading...") !== -1;
        if (loading) {
          const rowData = await getRowData(rowIndex) as T;
          if (rowData) {
            renderCellContent(rowElement, rowData, rowIndex);
          }
        }
      }
    });
  };

  const handleOnFirstPageLoaded = () => {
    const updateTopRowData = async () => {
      if (onTopRowChanged) {
        // Ensure data is resolved.
        const data = await getRowData(0);
        if (data) {
          onTopRowChanged(0, data);
        }
      }
    };
    updateTopRowData();
  };

  const { getRowData, updateAndSyncCache } = usePageCache<T>({
    fetchPageData,
    onCellContentUpdated: handleCellContentUpdate, 
    rowsPerPage,
    onFirstPageLoaded: handleOnFirstPageLoaded
  });

  const calculateVisibleRows = useCallback((scrollTop: number) => {
    const visibleRows = Math.floor(viewHeight / rowHeight);
    const tolerance = 5; 

    const firstRow = Math.max(0, Math.floor((scrollTop + tolerance) / rowHeight)); 
    const lastRow = Math.min(rowCount - 1, firstRow + visibleRows - 1); 
  
    log(`scrollTop: ${scrollTop}, firstRow: ${firstRow}, lastRow: ${lastRow}`);
  
    return { firstRow, lastRow };
  }, [log, rowCount, rowHeight, viewHeight]);

  const fetchAndSetData = useCallback(async (rowIndex: number, rowElement: HTMLElement) => {
    rowElement.dataset.rowIndex = rowIndex.toString();
    rowElement.innerHTML = 'Loading...';

    const rowData = await getRowData(rowIndex);
    renderCellContent(rowElement, rowData, rowIndex);

    rowElement.style.transform = `translateY(${rowIndex * rowHeight}px)`;
  }, [getRowData, renderCellContent, rowHeight]);

  const handleScroll = useCallback((scrollTop: number) => {
    log(`Handling scroll with scrollTop: ${scrollTop}`);
    
    const { firstRow, lastRow } = calculateVisibleRows(scrollTop);
    updateAndSyncCache(firstRow);
        
    log(`Visible rows from ${firstRow} to ${lastRow}`);
          
    rowsRef.current.forEach((rowElement: HTMLElement) => {      
      if (rowElement) {
        const currentRowIndex = parseInt(rowElement.dataset?.rowIndex || '0', 10); 
        if (currentRowIndex < firstRow - (poolSize.current / 3)) {
          const topRowIndex = topRowIndexRef.current;
          const newIndex = currentRowIndex + poolSize.current; 
          topRowIndexRef.current = Math.max(topRowIndex + 1, lastRow);
          log(`Recycling row ${currentRowIndex} to new row ${newIndex} (scrolling down).`);
          fetchAndSetData(newIndex, rowElement);
        } else if (currentRowIndex > lastRow + (poolSize.current / 3)) {
          const newIndex = currentRowIndex - poolSize.current; 
          log(`Recycling row ${currentRowIndex} to new row ${newIndex} (scrolling up).`);
          fetchAndSetData(newIndex, rowElement);
        }
      }
    });
    if (containerRef.current) {
      if (containerRef.current.scrollHeight - scrollTop - viewHeight < loadMoreThreshold) {
        log('End of scroll reached, triggering onEndReached.');
        if (onEndReached) {
          onEndReached();
        }        
      }
    }
  }, [calculateVisibleRows, fetchAndSetData, loadMoreThreshold, log, onEndReached, updateAndSyncCache, viewHeight]);

  const handleOnScrollStop = useCallback(async (offset: number) => {    
    scrollTopRef.current = offset;
    const { firstRow } = calculateVisibleRows(offset);
  
    if (onTopRowChanged) {
      const data = await getRowData(firstRow);
      onTopRowChanged(firstRow, data);
    }
    // console.log('handleOnScrollStop');
    // debugRowPool(firstRow, lastRow);
  }, [calculateVisibleRows, getRowData, onTopRowChanged]);  

  const { scrollToRow } = useKineticScroll({
    viewRef,
    indicatorRef,
    totalHeight,
    onScrollUpdate: handleScroll,
    onScrollStop: handleOnScrollStop,
    rowHeight
  });

  useEffect(() => {
    if (apiRef) {
      apiRef.current = { scrollToRow };
    }
  }, [scrollToRow, apiRef]);

  // Set viewHeight dynamically based on the viewRef container's size
  useEffect(() => {
    const updateViewHeight = () => {
      if (viewRef.current) {
        setViewHeight(viewRef.current.clientHeight);
      }
    };

    // Set the initial view height
    updateViewHeight();

    // Update viewHeight on window resize
    window.addEventListener('resize', updateViewHeight);
    return () => window.removeEventListener('resize', updateViewHeight);
  }, []);

  const roundedPoolSize = Math.ceil(Math.ceil(viewHeight / rowHeight) / 10) * 10;
  poolSize.current = roundedPoolSize * 3;

  const handleDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rowElement = event.currentTarget;
    const rowIndex = parseInt(rowElement.dataset.rowIndex || '-1');
    if (rowIndex && onRowDoubleClick) {
      onRowDoubleClick(rowIndex, apiRef?.current);
    }
  };

  const renderRows = () => {
    // Clear previous row references
    rowsRef.current = [];
  
    // Use containerRef.current.scrollTop if available, otherwise fallback to scrollTopRef.current
    const currentScrollTop = containerRef.current ? containerRef.current.scrollTop : scrollTopRef.current;
    const { firstRow } = calculateVisibleRows(currentScrollTop);
  
    const poolRows = Array.from({ length: poolSize.current }).map((_, poolIndex) => {
      const actualRowIndex = firstRow + poolIndex;
      const translateY = actualRowIndex * rowHeight - currentScrollTop;
      return (
        <div
          // Composite key to force remount when firstRow changes.
          key={`row-${firstRow}-${poolIndex}`} 
          data-row-index={actualRowIndex}
          ref={(el) => {
            if (el) {
              rowsRef.current[poolIndex] = el;
            }
          }}
          style={{
            height: rowHeight,
            position: 'absolute',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            transform: `translateY(${translateY}px)`,
          }}
          onDoubleClick={handleDoubleClick}
        >
          {/* Row content */}
        </div>
      );
    });
    
    return poolRows;
  };
   
  return (
    <div style={{ display: 'flex', flex: 1, width: '100%', height: '100%', overflow: 'hidden' }}>
      <div
        ref={viewRef}
        className={`${styles.wrapper}`}
      >
        <div
          ref={containerRef}
          style={{ height: `${totalHeight}px`, flexDirection: 'column', position: 'relative' }}
        >
          {renderRows()}
        </div>
      </div>
      <ScrollBar show={!hideVerticalScrollbar} containerHeight={viewHeight} totalHeight={totalHeight} ref={indicatorRef} />
    </div>
  );
}

const arePropsEqual = <T extends Record<string, unknown>>(
  prevProps: VirtualListProps<T>, 
  nextProps: VirtualListProps<T>
) => {
  // Get all the keys from the props objects
  const keys = Object.keys(prevProps) as (keyof VirtualListProps<T>)[];

  // Check each prop for equality
  for (const key of keys) {
    if (prevProps[key] !== nextProps[key]) {
      return false;  // If any prop is different, return false
    }
  }

  return true;  // All props are equal, so return true
};

export default React.memo(VirtualList, arePropsEqual) as typeof VirtualList;
