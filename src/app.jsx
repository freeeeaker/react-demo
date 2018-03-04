import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'
import Main from './page/index.jsx'

class App extends PureComponent {
  render () {
    return (
      <div>
        <div>hello, React嘿嘿嘿!!!</div>
        <Main />
      </div>
    )
  }
}

export default hot(module)(App)