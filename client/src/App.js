/*
  Reminder on Async/Await P1

*/

import searchImages from './api'
import SearchBar from './components/SearchBar'

function App() {
  const handleSubmit = (term) => {
    // *** return promise
    const result = searchImages(term)
    console.log(result) // Promise {<pending>}
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
