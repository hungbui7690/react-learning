/*
  Variations on Event Handlers P2
  - pic

*/

function App() {
  const handleClick = () => {
    console.log('Button was clicked!')
  }

  return (
    <div className='App'>
      {/* *** change to arrow function */}
      <button onClick={() => console.log('Button was clicked !')}>
        Add Animal
      </button>
    </div>
  )
}

export default App
