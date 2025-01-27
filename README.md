# kozmic-vlist

**(This is a work in progress...)**

The goal of the _kozmic-vlist_ component is to provide both DOM and data virtualization in a single, lightweight, and easy-to-use component. It enables users to seamlessly browse through thousands of records while maintaining a smooth, unobtrusive experience. By combining virtual rendering with efficient data handling, _kozmic-vlist_ ensures optimal performance and usability, even for large datasets, regardless of backend latency.

The implementation of kinetic scrolling in _kozmic-vlist_ draws inspiration from a series of [articles](https://ariya.io/tags/kinetic) on the mechanics and principles of kinetic scrolling. Kinetic or momentum scrolling, made popular by Apple on its mobile devices, these articles cover key concepts such as deceleration, inertia, and user interaction, all of which have been foundational in designing smooth scrolling experiences.

For data handling, the component takes inspiration from a Microsoft [article](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/controls/implementing-virtual-mode-jit-data-loading-in-the-datagrid?view=netframeworkdesktop-4.8) that describes how to implement virtual mode with just-in-time data loading. The article implements a two-page cache system while **kozmic-vlist** uses a tree-page cache to optimize data retrieval.
