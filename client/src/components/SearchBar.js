import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('') // ***

  const handleFormSubmit = (e) => {
    e.preventDefault()

    console.log(e) // *** check this to know why we use e.target.value, but not e.currentTarget.value
  }

  // ***
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          onChange={handleChange} // *** add onChange
        />
      </form>
    </div>
  )
}

export default SearchBar
