import React, { PureComponent } from 'react'
import * as reactRouter from 'react-router'
import * as reactRouterDOM from 'react-router-dom'
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// console.log(reactRouter)
// console.log(reactRouterDOM)
import { Route, Link } from 'react-router-dom'

import Main from './page/Main'
import Examples from './page/Examples'
import Header from './view/Header'
import { log } from './util/'

require('./style/index.scss')

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
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/examples" component={Examples} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}
const Application = PRODUCTION ? App : hot(module)(App)
export default Application
