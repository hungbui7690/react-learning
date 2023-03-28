/*
  Handling Form Submission P1
  - we know how to communicate between child and parent components 
    > remove the button > search as typing

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
