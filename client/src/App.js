/*
  Handling Input Elements P1
  - pic > (***) 

  - SearchBar.js
*/

import SearchBar from './components/SearchBar'

function App() {
  const handleSubmit = (term) => {
    console.log(term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
