/*
  Validating Props with PropTypes
  - pic
  - prop-types > use the validate the props user enters is correct or not 
    > npm i prop-types

  - we also want user just can enter either one of the variations: 
    + primary, secondary, success, error, warning...

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
