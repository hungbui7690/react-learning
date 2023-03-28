/*
  - create form
  - create handleSubmit
*/

import { useState } from 'react'

// ***
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('')

  // *** use below
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title) // ***

    setTitle('') // empty out the input
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' value={title} onChange={handleChange} />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default BookCreate
