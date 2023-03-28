/*
  Default Form Values P1
  - BookEdit.js

*/

import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }

  const createBook = (title) => {
    const updatedBooks = [...books, { id: new Date().getTime(), title }]
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
