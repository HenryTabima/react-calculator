import React, { Component } from 'react'
import Button from './Button'

const GRAY_COLOR = '#CFCFCF'

class ButtonPanel extends Component {
  render () {
    return (
      <div id='button-panel'>
        <div className="row">
          <Button name='AC' color={GRAY_COLOR} />
          <Button name='+/-' color={GRAY_COLOR} />
          <Button name='%' color={GRAY_COLOR} />
          <Button name='➗' />
        </div>
        <div className="row">
          <Button name='7' color={GRAY_COLOR} />
          <Button name='8' color={GRAY_COLOR} />
          <Button name='9' color={GRAY_COLOR} />
          <Button name='❌' />
        </div>
        <div className="row">
          <Button name='4' color={GRAY_COLOR} />
          <Button name='5' color={GRAY_COLOR} />
          <Button name='6' color={GRAY_COLOR} />
          <Button name='➖' />
        </div>
        <div className="row">
          <Button name='1' color={GRAY_COLOR} />
          <Button name='2' color={GRAY_COLOR} />
          <Button name='3' color={GRAY_COLOR} />
          <Button name='➕' />
        </div>
        <div className="row">
          <Button name='0' color={GRAY_COLOR} wide />
          <Button name='⚫' color={GRAY_COLOR} />
          <Button name='=' />
        </div>
      </div>
    )
  }
}

export default ButtonPanel
