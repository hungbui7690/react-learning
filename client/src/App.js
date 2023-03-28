/*
  Adding a Book For Real

*/

import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  // ***
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: 123, title }, // temporary use the fixed id
    ]

    setBooks(updatedBooks) // ***
  }

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
