import { VirtualList } from '../lib/main'

import './App.css'

type SampleData = {
  id: number,
  name: string,
}

const PAGE_SIZE = 100;

const generatePageData = (pageIndex: number): Promise<SampleData[]> => { 
  const offset = (pageIndex - 1) * PAGE_SIZE;
  const sampleItems = Array.from({ length: PAGE_SIZE }).map((_, index) => ({
    id: offset + index + 1,
    name: `Item ${offset + index + 1}`,
  }));
  return Promise.resolve(sampleItems);
}

// Function to render each row.
const renderCell = (rowData: SampleData, rowIndex: number) => {
  return (<div className="virtual-list-item">
    <strong>{rowData.name}</strong> (Row {rowIndex + 1})
  </div>);
};

function App() {

  return (
    <>
      <div>
        <h1>Kozmic Virtual List</h1>
      </div>
      <div className="card">
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <h2>Sample</h2>
      <div className="virtual-list-container">
        <VirtualList
          rowCount={1000}
          renderCell={renderCell}
          fetchPageData={generatePageData}
          rowsPerPage={PAGE_SIZE}
          rowHeight={50}
        />
      </div>
    </>
  )
}

export default App
