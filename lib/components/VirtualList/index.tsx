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
  onTopRowChanged?: (rowData: T) => void;
  apiRef?: React.MutableRefObject<VirtualListApi | undefined>;
  hideVerticalScrollbar?: boolean,
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

  const { getRowData, updateAndSyncCache } = usePageCache<T>({
    fetchPageData, 
    onCellContentUpdated: handleCellContentUpdate, 
    rowsPerPage
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

  const handleOnScrollStop = useCallback((offset: number) => {    
    scrollTopRef.current = offset;
    const { firstRow } = calculateVisibleRows(offset);

    if (onTopRowChanged) {
      const data = getRowData(firstRow);
      onTopRowChanged(data);
    }
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

  poolSize.current = Math.ceil(viewHeight / rowHeight) * 3;

  useEffect(() => {
    handleCellContentUpdate();
  });

  const handleDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    const rowElement = event.currentTarget;
    const rowIndex = parseInt(rowElement.dataset.rowIndex || '-1');
    if (rowIndex && onRowDoubleClick) {
      onRowDoubleClick(rowIndex, apiRef?.current);
    }
  };

  const renderRows = () => {
    const currentScrollTop = scrollTopRef.current; 
    const { firstRow, lastRow } = calculateVisibleRows(currentScrollTop);
  
    const previousPageRows = Array.from({ length: poolSize.current }).map((_, index) => {
      const translateY = Math.max(0, (index * rowHeight) - currentScrollTop);
      return (
        <div
          key={`prev-${index}`}
          data-row-index={index}
          ref={(el) => {
            if (el) rowsRef.current[index] = el;
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
  
    const visibleRows = Array.from({ length: lastRow - firstRow + 1 }).map((_, index) => {
      const translateY = (firstRow + index) * rowHeight - currentScrollTop;
      return (
        <div
          key={`visible-${firstRow + index}`}
          data-row-index={firstRow + index}
          ref={(el) => {
            if (el) rowsRef.current[firstRow + index] = el;
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
  
    const nextPageRows = Array.from({ length: poolSize.current }).map((_, index) => {
      const translateY = (index + (lastRow + 1)) * rowHeight - currentScrollTop;
      return (
        <div
          key={`next-${index}`}
          data-row-index={index + (lastRow + 1)}
          ref={(el) => {
            if (el) rowsRef.current[index + (lastRow + 1)] = el;
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
  
    return [...previousPageRows, ...visibleRows, ...nextPageRows];
  };

  console.log('Kozmic VirtualList redering...');
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
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

export default React.memo(VirtualList) as typeof VirtualList;
