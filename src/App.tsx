import { useState } from 'react'
import { VirtualList } from '../lib/main'

import './App.css'

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Kozmic Virtual List</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>

      <div className="virtual-list-container">
        <h2>Virtual List of Items</h2>
        <VirtualList
          items={items}
          itemHeight={40}
          renderItem={(item, index) => (
            <div key={index} className="virtual-list-item">
              {item}
            </div>
          )}
        />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
