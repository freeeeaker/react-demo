import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { log } from '../util/'
import Button from '@component/Button'

import "../style/page/main.scss"

@withRouter
export default class Main extends PureComponent {
  constructor () {
    super()
    this.state = { count: 0 }
  }
  componentDidMount () {
    this.run()
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  run = () => {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }
  renderDot () {
    return '.'.repeat(this.state.count % 4)
  }
  render () {
    const dot = this.renderDot()
    return (
      <div className="main-page">
        <div className="title-box">
          <h1>网站不定期施工中{dot}</h1>
          {/*<Button value="start" size="big" />*/}
        </div>
      </div>
    )
  }
}