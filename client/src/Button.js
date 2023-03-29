import classnames from 'classnames' // ***

// ***
const finalClassName = classnames({
  'bg-blue-500': true,
  'text-yellow': false, // false > won't be included
})

console.log(finalClassName)

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return (
    <button className='px-3 m-2 py-1.5 border-blue-600 bg-blue-500 text-white'>
      {children}
    </button>
  )
}

export default Button
