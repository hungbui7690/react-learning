/*
  Why Array Destructuring P1
  - we use a lot of lines below

*/

import { useState } from 'react'

function App() {
  function makeArray() {
    return [1, 10, 32, 40]
  }

  const myArray = makeArray()
  const firstElement = myArray[0]
  const secondElement = myArray[1]

  console.log(firstElement, secondElement)
}

export default App
