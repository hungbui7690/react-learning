/*
  Finding the Expanded Item P2
  - Accordion.js

*/

import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 1,
      label: 'Item #1',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse odit modi, veniam quisquam voluptatibus obcaecati molestiae facilis debitis maxime doloribus iste, dignissimos explicabo at tenetur, commodi eaque neque nisi unde!',
    },
    {
      id: 2,
      label: 'Item #2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.',
    },
    {
      id: 3,
      label: 'Item #3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto, nam doloremque natus reprehenderit facilis?',
    },
  ]

  return <Accordion items={items} />
}

export default App
