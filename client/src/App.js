/*
  Using Icons in React Projects P1
  - https://react-icons.github.io/react-icons/

  *** we can see that the button displays the icon incorrectly > fix in next lesson
*/

import Button from './Button'
import { GoBell, GoComment } from 'react-icons/go' // ***

function App() {
  // *** use like normal component
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
