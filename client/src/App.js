/*
  Running the Search 

*/

import searchImages from './api' // ***
import SearchBar from './components/SearchBar'

function App() {
  const handleSubmit = (term) => {
    // *** to test this, we don't do any console.log() > but we need to go to network tab > clear all result + filter by Fetch/XHR > pic
    searchImages(term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
