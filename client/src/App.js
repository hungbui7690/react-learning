/*
  The Purpose of Cleanup Functions P1

*/

import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // *** This is the bad way to setup click event > because with this setup, we just can have 1 event listener at body at a time
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
