/*
  Why Array Destructuring P4

*/

import { useState } from 'react'

// *** behind the scene
function useStateX(defaultValue) {
  return {
    yourState: defaultValue,
    yourSetter: () => {},
  }
}

function App() {
  // *** here we use object > if we want to use > use object destructuring
  const stateConfig = useStateX(0)
  const count = stateConfig.yourState
  const setCount = stateConfig.yourSetter

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
