/*
  Refactor The Rest
  - context/books.js
    > put all items in object to make the code more organized

  - Refactor the rest: 
    + BookCreate.js
    + BookShow.js
    + BookList.js
    + BookEdit.js


  *** we can see that we used context & props together (BookShow.js)

*/

import { useContext, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'

function App() {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
