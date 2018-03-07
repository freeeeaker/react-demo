import React, { PureComponent } from 'react'

import '@style/component/view'

export default class View extends PureComponent {
  render () {
    return (
      <div className="dh-view">{this.props.children}</div>
    )
  }
}