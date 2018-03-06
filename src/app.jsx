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
import Components from './page/Components'
import Header from './view/Header'
import Footer from './view/Footer'
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
        <div className="app-container">
          <Header />
          <div className="app-content">
            <div className="app-box container clear">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/examples" component={Examples} />
                <Route exact path="/components" component={Components} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </HashRouter>
    )
  }
}
const Application = PRODUCTION ? App : hot(module)(App)
export default Application
