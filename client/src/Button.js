import classnames from 'classnames'

// *** add px-1.5 > can combine string with object
const finalClassName = classnames('px-1.5', {
  'bg-blue-500': true,
  'text-yellow': false,
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
