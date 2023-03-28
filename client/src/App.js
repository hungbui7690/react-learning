/*
  Communicating the List of Images Down
  - pic 

  (***) when App component is re-rendered, all other children components will be re-rendered as well
*/

import { useState } from 'react'
import searchImages from './api'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList' // ***

function App() {
  const [images, setImages] = useState([]) // ***

  const handleSubmit = async (term) => {
    const result = await searchImages(term)

    setImages(result) // ***
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
