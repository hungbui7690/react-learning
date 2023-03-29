/*
  Installing Tailwind
  - https://tailwindcss.com/docs/guides/create-react-app

  - 5 steps: check link above
    > npm install -D tailwindcss
    > npx tailwindcss init > this will create tailwind config file
    > setup config 
    > create index.css & setup
    > inport in index.js

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
