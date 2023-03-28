/*
  Reminder on Event Handlers
  - pic

////////////////////////////////////

  Receiving New Titles
  - copy file index.css

*/

import { useState } from 'react'
import BookCreate from './components/BookCreate' // ***

function App() {
  const [books, setBooks] = useState([])

  // ***
  const createBook = (title) => {
    console.log('Need to add book with title: ', title)
  }

  return (
    <div>
      {/* *** pass props => can use onCreate or onSubmit  */}
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
