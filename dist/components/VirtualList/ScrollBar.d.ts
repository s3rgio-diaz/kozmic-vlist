interface ScrollBarProps {
    'aria-label'?: string;
    containerHeight: number;
    totalHeight: number;
    show: boolean;
}
interface ScrollBarHandle {
    setPosition: (offset: number) => void;
}
export type ScrollBarType = {
    setPosition: (offset: number) => void;
};
declare const ScrollBar: import('react').ForwardRefExoticComponent<ScrollBarProps & import('react').RefAttributes<ScrollBarHandle>>;
export default ScrollBar;
