import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../context/books'

const BookList = () => {
  // ***
  const {
    books,
    deleteBookById: onDelete,
    editBookById: onEdit,
  } = useContext(BooksContext)

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    )
  })

  return <div className='book-list'>{renderedBooks}</div>
}

export default BookList
