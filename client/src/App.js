/*
  Return to useEffect P1
  - VsCode Console > Warning
    > React Hook useEffect has a missing dependency: 'fetchBooks'
  - pic

  - App.js only
    > we want to click on the anywhere on the screen and show we want to show the "counter"

*/

import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  // *** try > it just works when we click the top part of the page
  return (
    <div onClick={() => console.log('Hello')}>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  )
}

export default App
