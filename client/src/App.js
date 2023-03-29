/*
  The Purpose of Cleanup Functions P2
  - setup this way, we can work on local
  - create problem:
    + click once on the button
    + click anywhere else > log 0 and 1

  *** everytime we click on the button, we create a brand NEW event listener > fix in next lesson

*/

import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // ***
    const listener = () => {
      console.log(counter)
    }
    document.addEventListener('click', listener)

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
