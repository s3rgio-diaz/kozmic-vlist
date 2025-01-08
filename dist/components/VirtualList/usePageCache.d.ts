type FetchPageData<T> = (pageIndex: number) => Promise<T[]>;
type LoadingType = {
    title: 'Loading...';
};
type UsePageCacheProps<T> = {
    fetchPageData: FetchPageData<T>;
    onCellContentUpdated?: () => void;
    rowsPerPage?: number;
};
export declare function usePageCache<T extends Record<string, unknown> | LoadingType>({ fetchPageData, onCellContentUpdated, rowsPerPage, }: UsePageCacheProps<T>): {
    getRowData: (rowIndex: number) => T;
    updateAndSyncCache: (firstVisibleRow: number) => Promise<void>;
};
export default usePageCache;
