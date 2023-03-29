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
  // ***
  let baseClassName = `px-3 m-2 py-1.5 `

  if (primary) {
    baseClassName += `border-blue-600 bg-blue-500 `
  }
  if (success) {
    baseClassName += `border-green-900 bg-green-800 `
  }

  return <button className={`${baseClassName} text-white`}>{children}</button>
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
