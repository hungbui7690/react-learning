/*
  Using the REST Client
  - pic
  - create api.http
    > separated requests by ###
    > when we use post request to add data > data will be added to db.json > just need to provide "title", id will be generated automatically

///////////////////////////////

  *** ERROR: 
    "The connection was rejected. Either the requested service isn’t running on the requested server/port, the proxy settings in vscode are misconfigured, or a firewall is blocking requests. Details: RequestError: connect ECONNREFUSED 127.0.0.1:3001"

  Fix: 
    "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"

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
