/*
  Variations on Event Handlers P1
  - pic

*/

function App() {
  const handleClick = () => {
    console.log('Button was clicked!')
  }

  return (
    <div className='App'>
      {/* *** write directly here */}
      <button
        onClick={function () {
          console.log('Button was clicked !')
        }}
      >
        Add Animal
      </button>
    </div>
  )
}

export default App
