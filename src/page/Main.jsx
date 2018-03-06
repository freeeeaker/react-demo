import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { log } from '../util/'

@withRouter
export default class Main extends PureComponent {
  componentDidMount () {
  }
  render () {
    return <h1>welcome to react</h1>
  }
}