import propTypes from 'prop-types'

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
  // *** primary button > warning: yellow > success: green
  return (
    <button className='px-3 m-2 py-1.5 border-blue-600 bg-blue-500 text-white'>
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger)

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      )
    }
  },
}

export default Button
