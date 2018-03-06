import React, { PureComponent } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'

require('../style/view/header.scss')

@withRouter
export default class Header extends PureComponent {
  isActive = match => {
    if (match) return true
    return false
  }
  render () {
    return (
      <header className="header">
        <div className="container clear">
          <div className="left logo">
            <Link to="/">DH</Link>
          </div>
          <ul className="horizontal nav">
            <li><NavLink exact isActive={this.isActive} to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink exact isActive={this.isActive} to="/components" activeClassName="active">Components</NavLink></li>
            <li><NavLink exact isActive={this.isActive} to="/examples" activeClassName="active">Examples</NavLink></li>
          </ul>
        </div>
      </header>
    )
  }
}