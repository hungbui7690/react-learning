import React from 'react'
import BookShow from './BookShow'
import { useBooksContext } from '../hooks/use-books-context' // ***

const BookList = () => {
  const {
    books,
    deleteBookById: onDelete,
    editBookById: onEdit,
  } = useBooksContext() // ***

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    )
  })

  return <div className='book-list'>{renderedBooks}</div>
}

export default BookList
