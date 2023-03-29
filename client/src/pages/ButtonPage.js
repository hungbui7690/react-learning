import Button from '../components/Button'
import { GoBell } from 'react-icons/go'

function ButtonPage() {
  const handleClick = () => {
    console.log('click!!!')
  }

  return (
    <div>
      <div>
        <Button primary rounded className='mb-5' onClick={handleClick}>
          <GoBell /> Click Me!
        </Button>
        <Button secondary onMouseOver={handleClick}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
