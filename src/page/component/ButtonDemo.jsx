import React, { PureComponent } from 'react'
import Button from '@component/Button'

export default class ButtonDemo extends PureComponent {
  render () {
    return (
      <div>
        <Button value="click" onClick={() => alert(1)} />
      </div>
    )
  }
}