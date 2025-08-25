import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl font-extrabold text-green-600 text-center p-8">Resource Catalog UI</h1>
    </>
  )
}

export default App
