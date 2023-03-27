/*
  Why Array Destructuring P3

*/

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  console.log(useState(50)) // *** [50, ƒ]

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of Animals: {count}</div>
    </div>
  )
}

export default App
