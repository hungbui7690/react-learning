/*
  Component Setup
  - create components/Accordion.js

*/

import Accordion from './components/Accordion'

function App() {
  // ***
  const items = [
    {
      label: 'Item #1',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odit modi, veniam quisquam voluptatibus obcaecati molestiae facilis debitis maxime doloribus iste, dignissimos explicabo at tenetur, commodi eaque neque nisi unde!',
    },
    {
      label: 'Item #2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    },
    {
      label: 'Item #3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto, nam doloremque natus reprehenderit facilis?',
    },
  ]

  // *** pass props
  return <Accordion items={items} />
}

export default App
