import React, { PureComponent } from 'react'
import * as reactRouter from 'react-router'
import * as reactRouterDOM from 'react-router-dom'
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// console.log(reactRouter)
// console.log(reactRouterDOM)
import { Route, Link } from 'react-router-dom'

import Main from './page/index'
import { log } from './util/'

class App extends PureComponent {
  constructor () {
    super()
  }
  componentDidMount () {
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <div>hello, React!</div>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/main?a=1">Main</Link></div>
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route component={() => <h3>This is Home</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
