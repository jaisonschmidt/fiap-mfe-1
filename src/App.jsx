import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((count) => count + 1);
    window.dispatchEvent(new CustomEvent('addItem', { detail: count }));
  }

  return (
    <>
      <h1>MFE 1</h1>
      <div className="card">
        <button className='btn btn-warning' onClick={handleCount}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
