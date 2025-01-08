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
declare const useKineticScroll: ({ viewRef, indicatorRef, totalHeight, onScrollUpdate, onScrollStop, rowHeight, debug, }: UseKineticScrollProps) => {
    offset: number;
    scrollToRow: (rowIndex: number) => void;
};
export default useKineticScroll;
