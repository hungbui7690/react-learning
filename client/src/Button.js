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
  // *** add class name
  return <button className='bg-blue-900 text-white'>{children}</button>
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
