/*
  Finalizing the Variations
  - rounded

*/

import Button from './Button'

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          Click Me!
        </Button>
        <Button secondary>Click Me!</Button>
        <Button success>Buy Now!</Button>
        <Button warning>Buy Now!</Button>
        <Button danger>Buy Now!</Button>
        <Button danger rounded>
          Buy Now!
        </Button>
      </div>
    </div>
  )
}

export default App
