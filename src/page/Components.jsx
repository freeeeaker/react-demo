import React, { PureComponent } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import View from '@component/view'

export default class Components extends PureComponent {
  render () {
    return (
      <div>
        <h2>Components List</h2>
        <View>
          <ul>
            <li><Link to="/components/button">button</Link></li>
            <li><Link to="/components/view">view</Link></li>
            <li><Link to="/components/modal">modal</Link></li>
          </ul>
        </View>
        <Switch>
          <Route exact path="/components/button" component={Loadable({loader: () => import('./component/ButtonDemo'),loading: () => <div>Loading...</div>})} />
          <Route exact path="/components/view" component={Loadable({loader: () => import('./component/ViewDemo'),loading: () => <div>Loading...</div>})} />
          <Route exact path="/components/modal" component={Loadable({loader: () => import('./component/ModalDemo'),loading: () => <div>Loading...</div>})} />
        </Switch>
      </div>
    )
  }
}