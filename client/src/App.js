/*
  useEffect Cleanup Functions P2
  - pic

  > https://codesandbox.io/s/hungry-fog-0ev1ec

*/

import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.body.onclick = () => {
      console.log(counter)
    }

    const cleanUp = () => {
      console.log('cleanup')
    }

    return cleanUp
  }, []) // *** remove counter here > run once

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  )
}

export default App
