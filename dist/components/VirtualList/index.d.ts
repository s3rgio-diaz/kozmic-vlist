import { default as React } from 'react';
type VirtualListApi = {
    scrollToRow: (index: number) => void;
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
    dataSourceKey?: number | string;
    debug?: boolean;
}
declare function VirtualList<T extends Record<string, unknown>>({ rowCount, fetchPageData, rowHeight, onEndReached, loadMoreThreshold, rowsPerPage, renderCell, onRowDoubleClick, onTopRowChanged, apiRef, hideVerticalScrollbar, dataSourceKey, debug, }: VirtualListProps<T>): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof VirtualList;
export default _default;
