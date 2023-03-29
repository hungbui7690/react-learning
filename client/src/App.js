/*
  How to use Tailwind
  - pic

  - Button.js
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
      </div>
    </div>
  )
}

export default App
