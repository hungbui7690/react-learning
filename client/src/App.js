/*
  The Children Prop P1
  
*/

import Button from './Button'

function App() {
  return (
    <div>
      {/* *** pass props */}
      <div>
        <Button text='Click Here!' />
      </div>

      {/* *** some people prefer to put text in between the tags > not passing props  */}
      <div>
        <Button>Click Me!</Button>
      </div>
    </div>
  )
}

export default App
