/*
  Understanding the Issue
  - pic
  
  
  *** https://codesandbox.io/s/hungry-fog-0ev1ec

*/

import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.body.onclick = () => {
      console.log(counter)
    }
  }, [])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  )
}

export default App
