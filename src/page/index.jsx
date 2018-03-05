import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { log } from '../util/'
const lodash =  require('@lodash')
for(var name in lodash) console.log(name)

@withRouter
export default class Main extends PureComponent {
  componentDidMount () {
    log('mounted main')
    console.log(this.props)
  }
  render () {
    return <h1>welcome to react</h1>
  }
}