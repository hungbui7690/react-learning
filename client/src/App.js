/*
  Return to useEffect P3
  - with this setup below, when we click on the button > it still increases the counter 
  - but the problem is when we click anywhere else > it still logs out 0 though we logged counter
  
  
  *** https://codesandbox.io/s/hungry-fog-0ev1ec

*/

import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  // *** DON'T DO THIS > if we change to "counter" > warning
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
