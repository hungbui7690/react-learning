/*
  Typical Component Layouts
  - pic

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App() {
  // ***
  const name = 'Sam'
  const age = 23

  // ***
  return (
    <h1>
      Hi, my name is {name} and my age is {age}
    </h1>
  )
}

root.render(<App />)
