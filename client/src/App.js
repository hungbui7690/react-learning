/*
  Displaying the List
  - pic

*/

import { useState } from 'react'
import BookCreate from './components/BookCreate'

import BookList from './components/BookList' // ***

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updatedBooks = [...books, { id: new Date().getTime(), title }]

    setBooks(updatedBooks)
  }

  // *** render BookList & pass props
  return (
    <div className='app'>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
