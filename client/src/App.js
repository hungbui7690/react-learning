/*
  Updating a Record P1
  - pic > understand why data might be outdate

*/

import { useEffect, useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  // ***
  const editBookById = async (id, newTitle) => {
    const response = await axios.put('http://localhost:3001/books/' + id, {
      title: newTitle,
    })

    console.log(response)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    })
    const updatedBooks = [...books, response.data]
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
