import classnames from 'classnames'

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  ...rest
}) => {
  // *** need to put it here
  const classes = classnames(
    rest.className,
    'px-3 py-1.5 m-1.5 border flex items-center ',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-500 bg-gray-700 text-white': secondary,
      'border-green-500 bg-green-700 text-white': success,
      'border-yellow-500 bg-yellow-600 text-white': warning,
      'border-red-500 bg-red-700 text-white': danger,
      'rounded-full': rounded,
    }
  )

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

export default Button
