import React from 'react'

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault() // ***

    console.log('Send data to parent...')
    onSubmit('cars') // ***
  }

  return (
    <div>
      {/* *** */}
      <form onSubmit={handleFormSubmit}>
        <input type='text' />
      </form>
    </div>
  )
}

export default SearchBar
