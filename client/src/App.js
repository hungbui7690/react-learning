/*
  JSON Server Setup
  - pic

  - we need to have 2 terminals:
    + react
    + json server

  
  (1)
  > npm install json-server
  
  (2)
  - create db.json

  (3)
  - package.json
    > create server command
    > npm run server

*/

import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }

      return book
    })

    setBooks(updatedBooks)
  }

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
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
