import React from 'react'
import Button from './Button'

const GRAY_COLOR = '#CFCFCF'

function ButtonPanel (props) {
  return (
    <div id='button-panel'>
      <div className="row">
        <Button name='AC' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='+/-' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='%' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='➗' clickHandler={buttonName => props.clickHandler(buttonName)} />
      </div>
      <div className="row">
        <Button name='7' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='8' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='9' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='❌' clickHandler={buttonName => props.clickHandler(buttonName)} />
      </div>
      <div className="row">
        <Button name='4' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='5' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='6' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='➖' clickHandler={buttonName => props.clickHandler(buttonName)} />
      </div>
      <div className="row">
        <Button name='1' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='2' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='3' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='➕' clickHandler={buttonName => props.clickHandler(buttonName)} />
      </div>
      <div className="row">
        <Button name='0' color={GRAY_COLOR} wide clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='.' color={GRAY_COLOR} clickHandler={buttonName => props.clickHandler(buttonName)} />
        <Button name='=' clickHandler={buttonName => props.clickHandler(buttonName)} />
      </div>
    </div>
  )
}

export default ButtonPanel
