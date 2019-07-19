import React from 'react'
import PropTypes from 'prop-types'

function Button ({ name, color, wide, clickHandler }) {
  const styles = {
    width: wide ? '50%' : '25%',
    backgroundColor: color
  }
  return <button style={styles} onClick={() => clickHandler(name)}>{name}</button>
}

Button.defaultProps = {
  wide: false,
  color: 'orange'
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
}

export default Button
