import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick (buttonName) {
    this.setState(calculate(this.state, buttonName))
  }

  render () {
    return (
      <div id='calculator'>
        <Display result={this.state.total} />
        <ButtonPanel clickHandler={() => this.handleClick()} />
      </div>
    )
  }
}

export default App
