/*
  Loading and Showing SVGs
  - pic
  
  - add svg/
  - AnimalShow.js

*/

import { useState } from 'react'
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className='App'>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  )
}

export default App
