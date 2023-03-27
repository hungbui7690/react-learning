/*
  Extracting Components
  - pic
  - create App.js

  CheatSheet for JSX
  > https://jsx-notes.vercel.app/

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // ***

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

root.render(<App />)
