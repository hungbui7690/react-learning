import React from 'react'

const SearchBar = ({ onSubmit }) => {
  // *** not not working yet, since we haven't prevent default behavior of form
  const handleFormSubmit = (e) => {
    console.log('Send data to parent')
  }

  // *** we will use form => onSubmit to handle submit when user press enter key
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type='text' />
      </form>
    </div>
  )
}

export default SearchBar
