/*
  Back to the App
  - pic

////////////////////////////////

  Picking a Random Element 

*/

import { useState } from 'react'

// ***
function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([]) // ***

  // ***
  const handleClick = () => {
    // animals.push(getRandomAnimal()) // *** this never works > STATES CANNOT BE MODIFIED DIRECTLY!!!
    setAnimals([...animals, getRandomAnimal()]) // copy
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  )
}

export default App
