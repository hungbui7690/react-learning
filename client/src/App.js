/*
  PropTypes in Action P1
  - Button.js

  - we will use custom validators

*/

import Button from './Button'

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Me!
        </Button>
        <Button danger outline>
          Buy Now!
        </Button>
        <Button secondary rounded>
          See Deal!
        </Button>
      </div>
    </div>
  )
}

export default App
