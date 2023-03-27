import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import searchImages from './api' // ***

const URL = 'https://api.unsplash.com/photos' // ***

searchImages(URL) // *** just for testing purposes

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
