import React, { PureComponent } from 'react'
import * as reactRouter from 'react-router'
import * as reactRouterDOM from 'react-router-dom'
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'

import { Route, Link } from 'react-router-dom'

import Header from './view/Header'
import Footer from './view/Footer'
import { log } from './util/'

const asyncExamples = 

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
                <Route exact path="/" component={Loadable({loader: () => import('./page/Main'),loading: () => <div>Loading...</div>})} />
                <Route path="/examples" component={Loadable({loader: () => import('./page/Examples'),loading: () => <div>Loading...</div>})} />
                <Route path="/components" component={Loadable({loader: () => import('./page/Components'),loading: () => <div>Loading...</div>})} />
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
