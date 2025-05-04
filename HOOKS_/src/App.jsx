import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const increaseCount = () => {
    if(count<25) setCount(count + 1)
  }
  const decreaseCount = () => {
    if (count > 0) setCount(count - 1)
    }


  return (
    <>
     <h1>React Counter</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <p></p>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
