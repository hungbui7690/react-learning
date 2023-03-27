/*
  Showing Basic Content
  - pic
  - delete un-necessary files: 
    + public/
      > delete everything, but keeps index.html
    + src/
      > delete everything > create index.js

*/

// (1) import React & ReactDOM Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// (2) Get the reference to div with ID of root
const el = document.getElementById('root')

// (3) Tell React to take control of that element
const root = ReactDOM.createRoot(el)

// (4) Create a component
function App() {
  return <h1>Hi There!</h1>
}

// (5) Show the component on the screen
root.render(<App />)
