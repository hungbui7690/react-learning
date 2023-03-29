/*
  ESLint is Good but be Careful
  - we add the fix to our app
    > first glance > our app works fine
    > but if we check network tab > requests was sent continuously
    > why > pic
  

  *** https://codesandbox.io/s/hungry-fog-0ev1ec

*/

import { useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { useBooksContext } from './hooks/use-books-context'

function App() {
  const { fetchBooks } = useBooksContext()

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks]) // *** we add the fix here

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
