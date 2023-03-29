/*
  Review on Styling
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
        <div>
          <Button danger outline>
            Buy Now!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
