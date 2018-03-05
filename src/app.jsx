import React, { PureComponent } from 'react'
import * as reactRouter from 'react-router'
import * as reactRouterDOM from 'react-router-dom'
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// console.log(reactRouter)
// console.log(reactRouterDOM)
import { Route, Link } from 'react-router-dom'

import Main from './page/Main'
import TextOverflow from './page/TextOverflow'
import { log } from './util/'

class App extends PureComponent {
  constructor () {
    super()
  }
  componentDidMount () {
  }
  render () {
    return (
      <HashRouter>
        <div>
          <h1>hello, welcome to my React Demo page!</h1>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/text-overflow">text-overflow</Link></div>
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/text-overflow" component={TextOverflow} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
const Application = PRODUCTION ? App : hot(module)(App)
export default Application
