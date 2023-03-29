/*
  Using Icons in React Projects P2
  - Button.js

  - fix gap
*/

import Button from './Button'
import { GoBell, GoComment } from 'react-icons/go'

function App() {
  // *** we can also add here
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell className='mr-2' /> Click Me!
        </Button>
        <Button secondary>
          <GoComment /> Click Me!
        </Button>
        <Button success>Buy Now!</Button>
        <Button warning>Buy Now!</Button>
        <Button danger>Buy Now!</Button>
        <Button>Here</Button>
        <Button danger rounded>
          Buy Now!
        </Button>
      </div>
    </div>
  )
}

export default App
