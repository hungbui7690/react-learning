/*
  The Purpose of Cleanup Functions P3
  - pic 
  - below, we setup cleanup function to remove event listener
  - click on the top part of the page

  *** side note: actually, the previous code that we need to work on codesandbox can works locally > reason it does not work because the document.body is just the top part > check in inspection

*/

import { useEffect, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const listener = () => {
      console.log(counter)
    }
    document.body.addEventListener('click', listener)

    // *** normally, we don't write like this (not create function and return) > but return function directly
    const cleanUp = () => {
      document.body.removeEventListener('click', listener)
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
