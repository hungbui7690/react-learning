import React, { useState } from 'react'

const BookEdit = ({ book }) => {
  // ***
  const [title, setTitle] = useState('')

  // ***
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  // ***
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('New Title: ', title)
  }

  // ***
  return (
    <form className='book-edit'>
      <label>Title</label>
      <input
        type='text'
        className='input'
        value={title}
        onChange={handleChange} // ***
      />
      <button className='button is-primary' onClick={handleSubmit}>
        Save
      </button>
    </form>
  )
}

export default BookEdit
