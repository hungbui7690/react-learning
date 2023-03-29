import { createContext } from 'react'

const BooksContext = createContext()

function Provider({ children }) {
  // *** still need to keep value prop
  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>
}

export { Provider }
export default BooksContext
