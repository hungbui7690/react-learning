import React, { useState } from 'react'

// ***
const BookEdit = ({ book, onEdit, onSubmit }) => {
  const [title, setTitle] = useState(book.title)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onEdit(book.id, title)
    onSubmit() // ***
  }

  return (
    <form className='book-edit'>
      <label>Title</label>
      <input
        type='text'
        className='input'
        value={title}
        onChange={handleChange}
      />
      <button className='button is-primary' onClick={handleSubmit}>
        Save
      </button>
    </form>
  )
}

export default BookEdit
