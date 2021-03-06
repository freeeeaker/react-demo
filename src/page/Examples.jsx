import React, { PureComponent } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

export default class Examples extends PureComponent {
  render () {
    return (
      <div>
        <h2>Example List</h2>
        <ul>
          <li><Link to="/examples/text-overflow">text-overflow</Link></li>
        </ul>
        <Switch>
          <Route exact path="/examples/text-overflow" component={Loadable({loader: () => import('./example/TextOverflow'),loading: () => <div>Loading...</div>})} />
        </Switch>
      </div>
    )
  }
}