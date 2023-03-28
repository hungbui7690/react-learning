/*
  Reminder on Async/Await P2

*/

import searchImages from './api'
import SearchBar from './components/SearchBar'

function App() {
  // *** need to use async/await to get back promise result
  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    console.log(result) // *** now, we get the data > response.data !== response.data.results
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
