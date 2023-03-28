import React from 'react'
import BookShow from './BookShow'

// ***
const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    // *** pass props
    return <BookShow key={book.id} book={book} onDelete={onDelete} />
  })

  return <div className='book-list'>{renderedBooks}</div>
}

export default BookList
