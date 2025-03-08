import { useEffect, useRef, useCallback } from 'react';

type PageData<T> = {
  data: T[];
  pageNumber: number | null;
};

type FetchPageData<T> = (pageIndex: number) => Promise<T[]>;

type LoadingType = { title: 'Loading...' };

type UsePageCacheProps<T> = {
  fetchPageData: FetchPageData<T>;
  onCellContentUpdated?: () => void;
  rowsPerPage?: number;
  onFirstPageLoaded?: (data: T[]) => void;
  dataSourceKey: number | string;
};

export function usePageCache<T extends Record<string, unknown> | LoadingType>({
  fetchPageData,
  onCellContentUpdated,
  rowsPerPage = 100,
  onFirstPageLoaded,
  dataSourceKey
}: UsePageCacheProps<T>) {
  const cache = useRef<{
    previousPage: PageData<T>;
    visiblePage: PageData<T>;
    nextPage: PageData<T>;
  }>({
    previousPage: { data: [], pageNumber: null },
    visiblePage: { data: [], pageNumber: null },
    nextPage: { data: [], pageNumber: null },
  });

  const visiblePageIndex = useRef<number | null>(null);
  const isFetchingRef = useRef(false);
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialPageLoadedRef = useRef(false);

  // Fetch the page data
  const fetchPage = useCallback(
    async (index: number): Promise<T[]> => {
      if (index < 1 || isFetchingRef.current) {
        return [];
      }

      try {
        isFetchingRef.current = true;
        const pageData = await fetchPageData(index);
        return pageData;
      } catch (error) {
        console.error('Error fetching page data:', error);
        return [];
      } finally {
        isFetchingRef.current = false;
        if (onCellContentUpdated) { 
          onCellContentUpdated();
        }
      }
    },
    [fetchPageData, onCellContentUpdated]
  );

  // Sync the page data
  const syncPage = useCallback(
    (firstVisibleRow: number) => {
      const pageIndex = Math.floor(firstVisibleRow / rowsPerPage) + 1;
      visiblePageIndex.current = pageIndex;

      const { nextPage, visiblePage, previousPage } = cache.current;

      if (previousPage.data.length === 0) {
        // console.log('Prev page is Empty!');
      }
      if (nextPage.data.length === 0) {
        console.log('Next page is Empty!');
      }
      if (visiblePage.data.length === 0) {
        console.log('Visible page is Empty!');
      }

      if (onCellContentUpdated) {
        onCellContentUpdated();
      }
    },
    [onCellContentUpdated, rowsPerPage]
  );

  const updateCache = useCallback(
    async (pageIndex: number) => {
      const pageCache = cache.current;
      const previousPageIndex = pageIndex - 1;
      const nextPageIndex = pageIndex + 1;
      const { previousPage, visiblePage, nextPage } = pageCache;

      // Function to get the cached page data based on page number
      const getPageData = (pageNbr: number): PageData<T> | null => {
        const page = [previousPage, visiblePage, nextPage].find(
          (page) => page.pageNumber === pageNbr
        );
        if (page) {
          return { ...page, data: [...page.data] }; // Return a copy to avoid mutating the cache directly
        }
        return null;
      };

      // Helper function to fetch data for a page if not in cache
      const fetchPageDataIfNeeded = async (
        pageNbr: number,
        pageCacheField: (page: PageData<T>) => void
      ): Promise<boolean> => {
        const pageData = getPageData(pageNbr);
        if (pageData) {
          // Use the cached page data.
          pageCacheField(pageData);
          // No need to update or re-fetch.
          return false;
        } else {
          const newPageData = await fetchPage(pageNbr);
          pageCacheField({ data: newPageData, pageNumber: pageNbr });
          // Page data was fetched.
          return true;
        }
      };

      try {
        let cacheUpdated = false;

        // Fetch the visible page if it's not cached
        if (pageCache.visiblePage.pageNumber !== pageIndex) {
          cacheUpdated = await fetchPageDataIfNeeded(
            pageIndex,
            (data) => (pageCache.visiblePage = data)
          );
        }

        // Fetch the adjacent pages (previousPage and nextPage) if necessary
        const fetchPromises: Promise<boolean>[] = [];

        // Fetch previous page only if necessary
        if (pageCache.previousPage.pageNumber !== previousPageIndex && pageIndex > 1) {
          fetchPromises.push(
            fetchPageDataIfNeeded(previousPageIndex, (data) => (pageCache.previousPage = data))
          );
        }

        // Fetch next page only if necessary
        if (pageCache.nextPage.pageNumber !== nextPageIndex) {
          fetchPromises.push(
            fetchPageDataIfNeeded(nextPageIndex, (data) => (pageCache.nextPage = data))
          );
        }

        // Wait for all fetches to complete in parallel
        const fetchResults = await Promise.all(fetchPromises);

        // If any page data was updated, set cacheUpdated to true
        if (fetchResults.includes(true)) {
          cacheUpdated = true;
        }

        // If cache was updated, we should trigger the update handler
        if (cacheUpdated) {
          if (onCellContentUpdated) {
            onCellContentUpdated();
          }
        }
      } catch (error) {
        console.error('Error while fetching pages in parallel:', error);
      }
    },
    [fetchPage, onCellContentUpdated]
  );

  // Debounced sync for page updates
  const debouncedSyncPage = useCallback(
    (firstVisibleRow: number) => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
      syncTimeoutRef.current = setTimeout(() => {
        syncPage(firstVisibleRow);
      }, 100);
    },
    [syncPage]
  );

  // Update and sync the cache: no need to worry about scrolling direction
  const updateAndSyncCache = useCallback(
    async (firstVisibleRow: number) => {
      if (isFetchingRef.current) {
        return;
      }

      const pageIndex = Math.floor(firstVisibleRow / rowsPerPage) + 1;

      if (pageIndex === visiblePageIndex.current) {
        debouncedSyncPage(firstVisibleRow); // Just debouncing, no need for cache update
        return;
      }

      // If it's the first render or a page change
      if (visiblePageIndex.current === null) {
        visiblePageIndex.current = pageIndex;
        await updateCache(pageIndex);
        syncPage(firstVisibleRow);
        // Notify that the first page load is complete.
        if (!initialPageLoadedRef.current && cache.current.visiblePage.data.length > 0) {
          initialPageLoadedRef.current = true;
          if (onFirstPageLoaded) {
            onFirstPageLoaded(cache.current.visiblePage.data);
          }
        }
        return;
      }

      // Just update the cache with the new page index
      await updateCache(pageIndex);
      // Only sync the page if the cache was actually updated
      if (cache.current.visiblePage.pageNumber === pageIndex) {
        syncPage(firstVisibleRow); // No need to await here
      }
    },
    [debouncedSyncPage, rowsPerPage, syncPage, updateCache]
  );

  const prevDataSourceKeyRef = useRef(dataSourceKey);

  // Helper function to clear the cache and related refs
  const clearCache = useCallback(() => {
    cache.current = {
      previousPage: { data: [], pageNumber: null },
      visiblePage: { data: [], pageNumber: null },
      nextPage: { data: [], pageNumber: null },
    };
    visiblePageIndex.current = null;
    initialPageLoadedRef.current = false;
  }, []);

  useEffect(() => {
    // Only clear the cache if the dataSourceKey has actually changed.
    if (prevDataSourceKeyRef.current !== dataSourceKey) {
      clearCache();
      updateAndSyncCache(1);
      prevDataSourceKeyRef.current = dataSourceKey;
    }
    // Alternatively, on the very first render, you can initialize the cache.
    else if (prevDataSourceKeyRef.current === undefined) {
      clearCache();
      updateAndSyncCache(1);
      prevDataSourceKeyRef.current = dataSourceKey;
    }
  }, [dataSourceKey, clearCache, updateAndSyncCache]);

  const getRowData = (rowIndex: number) : T => {
    const pageIndex = Math.floor(rowIndex / rowsPerPage) + 1;
    const offset = rowIndex % rowsPerPage;
  
    const { previousPage, visiblePage, nextPage } = cache.current;
    const currentPage = visiblePageIndex.current;
  
    let page;
    switch (pageIndex) {
      case currentPage! - 1:
        page = previousPage.data;
        break;
      case currentPage:
        page = visiblePage.data;
        break;
      case currentPage! + 1:
        page = nextPage.data;
        break;
      default:
        return { title: 'Loading...' } as T;
    }
    const rowData = page?.[offset];  
    return rowData ?? { title: 'Loading...' } as T;
  };  

  useEffect(() => {
    if (visiblePageIndex.current === null) {
      // Start from the first row if it's the first render.
      updateAndSyncCache(1);
    }
  }, [updateAndSyncCache]);

  return { getRowData, updateAndSyncCache };
};

export default usePageCache;
