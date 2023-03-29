import { useContext, useState } from 'react'
import BooksContext from '../context/books'
import BookEdit from './BookEdit'

// *** we use props & context together
const BookShow = ({ book }) => {
  // ***
  const { deleteBookById: onDelete, editBookById: onEdit } =
    useContext(BooksContext)

  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)

    onEdit(id, newTitle)
  }

  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
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
