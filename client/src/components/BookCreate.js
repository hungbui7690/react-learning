import { useContext, useState } from 'react'
import BooksContext from '../context/books'

const BookCreate = () => {
  // *** we can rename here, or rename below
  const { createBook: onCreate } = useContext(BooksContext)

  const [title, setTitle] = useState('')

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
