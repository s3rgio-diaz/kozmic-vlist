# kozmic-vlist

**(This is a work in progress...)**

The goal of the **kozmic-vlist** component is to provide both DOM and data virtualization in a single, lightweight, and easy-to-use component. It enables users to seamlessly browse through thousands of records while maintaining a smooth, unobtrusive experience. By combining virtual rendering with efficient data handling, **kozmic-vlist** ensures optimal performance and usability, even for large datasets, regardless of backend latency.

## Features

- Rolling DOM Virtualization: Renders three pages at a time—previous, visible, and next—to maintain smooth scrolling and efficient memory usage, even with large datasets.
- Kinetic Scrolling (iOS-like): Offers fluid, momentum-based scrolling, providing a natural and intuitive user experience similar to iOS devices.
- Just-in-Time Data Loading: Dynamically loads data as the user scrolls, optimizing load times and reducing memory overhead.
- Customizable Row Rendering: Users can supply their own markup for row rendering, enabling flexible handling of various data formats and UI designs.

## References

The implementation of kinetic scrolling in **kozmic-vlist** draws inspiration from a series of [articles](https://ariya.io/tags/kinetic) on the mechanics and principles of kinetic scrolling. Kinetic or momentum scrolling, made popular by Apple on its mobile devices, covers key concepts such as deceleration, inertia, and user interaction, all of which have been foundational in designing smooth scrolling experiences.

For data handling, the component takes inspiration from a Microsoft [article](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/implementing-virtual-mode-jit-data-loading-in-the-datagrid?view=netframeworkdesktop-4.8) that explains how to implement virtual mode with just-in-time data loading in a grid view control. While the article describes a two-page cache system, **kozmic-vlist** uses a tree-page cache to optimize data retrieval.

## Samples

To quickly try out **kozmic-vlist**, follow these steps:

1. Install dependencies:
   `npm install`
2. Run the development server:
   `npm run dev`
3. Check `src/App.tsx` to inspect the code and see the implementation.

👀 You can also see a sample of **kozmic-vlist** in action [here](https://themoviereel.sergiolabs.tech/). 👈
