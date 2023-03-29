import { createContext, useState } from 'react'

const BooksContext = createContext()

// create custom Provider
function Provider({ children }) {
  const [count, setCount] = useState(5)

  // create object to share multiple values
  const valuesToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1)
    },
  }

  // share
  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  )
}

export { Provider } // *** export
export default BooksContext
