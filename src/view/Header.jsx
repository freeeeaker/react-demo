import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

require('../style/view/header.scss')

export default class Header extends PureComponent {
  render () {
    return (
      <header className="header">
        <div className="container">
          <ul className="horizontal nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/examples">Examples</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}