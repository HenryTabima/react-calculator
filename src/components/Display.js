'use strict'

import React, { PropTypes } from 'react'

function Display ({ result }) {
  return <div>{result}</div>
}

Display.defaultProps = { result: '0' }

Display.porpTypes = {
  result: PropTypes.string
}

export default Display
