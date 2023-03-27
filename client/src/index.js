/*
  Applying Styling in JSX
  - pic

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

function App() {
  return <textarea autoFocus={true} />
}

root.render(<App />)
