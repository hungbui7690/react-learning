/*
  Refactoring the App
  - pic
  - cut from App.js to context/

  *** App still cannot work > need to fix in later lessons

*/

import { useContext, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'

function App() {
  // ***
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
  }, [])

  // *** remove props pass
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
