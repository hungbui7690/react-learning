/*
  Updating State P2
  - pic: show how to fix the issue
  - we did not do anything with the code this lesson

*/

import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    books.push({ id: 123, title: title })
    setBooks(books)
  }

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
