/*
  Issues with Event Handlers P2
  - pic: continue with pic 6


*/

import Button from './Button'
import { GoBell } from 'react-icons/go'

function App() {
  const handleClick = () => {
    console.log('click!!!')
  }

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
