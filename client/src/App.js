/*
  Handling the Special ClassName Case
  - pic

*/

import Button from './Button'
import { GoBell } from 'react-icons/go'

function App() {
  const handleClick = () => {
    console.log('click!!!')
  }

  // *** we add className="mb-5" > we don't see any change
  return (
    <div>
      <div>
        <Button primary rounded className='mb-5' onClick={handleClick}>
          <GoBell /> Click Me!
        </Button>
        <Button secondary onMouseOver={handleClick}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default App
