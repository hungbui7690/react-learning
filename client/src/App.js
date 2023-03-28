/*
  Handling Input Elements P2
  - SearchBar.js

  - pic > what does react do with 5 steps in previous lesson?
    > this is the reason why we need to use this way to handle input in form > because we need to update the state and trigger re-render

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
