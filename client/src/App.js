/*
  Introducing the Event System
  - pic

*/

function App() {
  // ***
  const handleClick = () => {
    console.log('Button was clicked!')
  }

  return (
    <div className='App'>
      {/* *** */}
      <button onClick={handleClick}>Add Animal</button>
    </div>
  )
}

export default App
