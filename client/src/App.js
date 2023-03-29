/*
  The ClassNames Library P1
  - pic

  - instead of doing like in Button.js, we use library to make it easier and less tedious

*/

import Button from './Button'

function App() {
  return (
    <div>
      <div>
        <Button primary>Click Me!</Button>
        <div>
          <Button success>Buy Now!</Button>
        </div>
      </div>
    </div>
  )
}

export default App
