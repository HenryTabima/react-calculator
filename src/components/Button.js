'use strict'
import React, { PropTypes } from 'react'

function Button ({ name }) {
  return <div>{name}</div>
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button
