/*
  Using Icons in React Projects P3
  - Button.js

  - we don't want to add mr-2 to all components > write global css 
    > index.css

*/

import Button from './Button'
import { GoBell, GoComment } from 'react-icons/go'

function App() {
  // *** we can also add here
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell /> Click Me!
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
