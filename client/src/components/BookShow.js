import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  // ***
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)

    onEdit(id, newTitle) // ***
  }

  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    // *** remove onEdit
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
