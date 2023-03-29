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
  return <button>{children}</button>
}

// ***
Button.propTypes = {
  checkVariationValue: (props) => {
    console.log(props)
  },
}

export default Button
