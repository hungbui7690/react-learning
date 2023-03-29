/*
  useEffect Cleanup Functions P1
  - pic

  copy code to link below to test
  > https://codesandbox.io/s/hungry-fog-0ev1ec

*/

import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  // *** return function > everytime counter changes > return new function
  useEffect(() => {
    document.body.onclick = () => {
      console.log(counter)
    }

    const cleanUp = () => {
      console.log('cleanup')
    }

    return cleanUp
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  )
}

export default App
