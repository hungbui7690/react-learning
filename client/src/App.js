/*
  PropTypes in Action P2 (***)
  - turn true/false/undefined into number
    - Number(true) = 1
    - Number(undefined) = NaN
    - Number(!!undefined) = 0
    - !!undefined = false 

  *** prop-types does not show error, it just show WARNING
    > nowadays, TS can do this for us

*/

import Button from './Button'

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click Me!
        </Button>
        <Button primary danger outline>
          Buy Now!
        </Button>
      </div>
    </div>
  )
}

export default App
