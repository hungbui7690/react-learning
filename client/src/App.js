/*
  Props Design
  - pic
  
*/

import Button from './Button'

function App() {
  // *** should design like below
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
