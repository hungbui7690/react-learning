import { useState } from 'react'
import { useBooksContext } from '../hooks/use-books-context'

const BookCreate = () => {
  const [title, setTitle] = useState('')
  const { createBook: onCreate } = useBooksContext()

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title)

    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className='input'
          type='text'
          value={title}
          onChange={handleChange}
        />
        <button className='button' type='submit'>
          Add Book
        </button>
      </form>
    </div>
  )
}

export default BookCreate
