/*
  Issues with Event Handlers P1
  - pic

*/

import Button from './Button'
import { GoBell, GoComment } from 'react-icons/go'

function App() {
  // ***
  const handleClick = () => {
    console.log('click!!!')
  }

  // *** pass onClick
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell /> Click Me!
        </Button>
      </div>
    </div>
  )
}

export default App
