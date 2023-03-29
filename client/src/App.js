/*
  Introducing TailwindCSS
  - pic (***)
  - css library
    > each class name has singular styling rule
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
