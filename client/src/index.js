/*
  Printing JavaScript Variables in JSX P2
  - pic

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App() {
  // let message = 123 // *** number & string is ok
  // let message = true // true/false/undefined/null > not ok
  // let message = {} // error
  let message = [1, 2, 3] // unexpected result

  if (Math.random() > 0.5) {
    message = 'Hello There!'
  }

  return <h1>{message}</h1>
}

root.render(<App />)
