import React from 'react'

// *** extract to props
const SearchBar = ({ onSubmit }) => {
  // ***
  const handleClick = () => {
    onSubmit('cars') // *** if we can see the log when we click the button > we're successfully communicate between child and parent
  }

  return (
    <div>
      <input type='text' />
      <button
        type='submit'
        onClick={handleClick} // ***
      >
        Search{' '}
      </button>
    </div>
  )
}

export default SearchBar
