/*
  Return to useEffect P2

  - the code below only works on codesanbox
    > https://codesandbox.io/s/hungry-fog-0ev1ec

*/

import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  // *** DON'T DO THIS
  useEffect(() => {
    document.body.onclick = () => {
      console.log('Hello')
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
