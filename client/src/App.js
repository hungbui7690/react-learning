/*
  Why Array Destructuring P2
  
*/

import { useState } from 'react'

function App() {
  function makeArray() {
    return [1, 10, 32, 40]
  }

  const myArray = makeArray()

  const [firstElement, secondElement] = myArray // *** array destructuring

  console.log(firstElement, secondElement)
}

export default App
