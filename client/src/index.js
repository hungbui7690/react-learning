import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  console.clear()
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  // ***
  useEffect(() => {
    console.log('Called once and never again!!')
  }, [])

  useEffect(() => {
    console.log('Called Everytime !!')
  })

  useEffect(() => {
    console.log('counterOne Changed !!')
  }, [counterOne])

  useEffect(() => {
    console.log('counterTwo Changed !!')
  }, [counterTwo])

  useEffect(() => {
    console.log('Called whenever each of the counter changed !!')
  }, [counterOne, counterTwo])

  return (
    <div className='app'>
      <div>
        <button onClick={() => setCounterOne(counterOne + 1)}>
          ++ Counter One
        </button>
        <div>Counter One Value:</div>
        <h3>{counterOne}</h3>
      </div>
      <span className='divide' />
      <div>
        <button onClick={() => setCounterTwo(counterTwo + 1)}>
          ++ Counter Two
        </button>
        <div>Counter Two Value:</div>
        <h3>{counterTwo}</h3>
      </div>
    </div>
  )
}

const el = document.querySelector('#root')
const root = ReactDOM.createRoot(el)

root.render(<App />)
