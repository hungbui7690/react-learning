/*
  Handling Form Submission P2
  - pic

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
