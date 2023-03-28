/*
  Thinking About Data Flow
  - pic

//////////////////////////////

  Child to Parent Communication
  - pic

//////////////////////////////

  Implementing Child to Parent Communication (***)
  - App.js
  - SearchBar.js

*/

import SearchBar from './components/SearchBar' // ***

function App() {
  // ***
  const handleSubmit = (term) => {
    console.log(term)
  }

  return (
    <div>
      {/* *** pass function as props */}
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
