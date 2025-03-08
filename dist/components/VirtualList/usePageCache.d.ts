type FetchPageData<T> = (pageIndex: number) => Promise<T[]>;
type LoadingType = {
    title: 'Loading...';
};
type UsePageCacheProps<T> = {
    fetchPageData: FetchPageData<T>;
    onCellContentUpdated?: () => void;
    rowsPerPage?: number;
    onFirstPageLoaded?: (data: T[]) => void;
    dataSourceKey: number | string;
};
export declare function usePageCache<T extends Record<string, unknown> | LoadingType>({ fetchPageData, onCellContentUpdated, rowsPerPage, onFirstPageLoaded, dataSourceKey }: UsePageCacheProps<T>): {
    getRowData: (rowIndex: number) => T;
    updateAndSyncCache: (firstVisibleRow: number) => Promise<void>;
};
export default usePageCache;
