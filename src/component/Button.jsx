import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import "../style/component/button.scss"

export default class Button extends PureComponent {
  render () {
    const { type, value, size } = this.props
    return (
      <button
        className="dh-button"
        data-type={type}
        data-size={size}
      >
        {value}
      </button>
    )
  }
}

Button.defaultProps = {
  value: 'button',
  type: 'normal',
  size: 'normal'
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'danger']),
  size: PropTypes.oneOf(['normal', 'big'])
}