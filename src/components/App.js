import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      total: '0',
      next: '0',
      operation: '',
      isShowingResult: false
    }
  }

  handleClick (buttonName) {
    this.setState(calculate(this.state, buttonName))
  }

  render () {
    return (
      <div id='calculator'>
        <Display result={this.state.next} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    )
  }
}

export default App
