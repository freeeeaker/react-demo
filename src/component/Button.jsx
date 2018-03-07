import React, { PureComponent } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import omit from '@lodash/omit'

import "@style/component/button"

export default class Button extends PureComponent {
  render () {
    const { type, value, size, className } = this.props
    const props = omit(this.props, ['type', 'value', 'size', 'className'])
    return (
      <button
        className={classnames('dh-button', className)}
        data-type={type}
        data-size={size}
        {...props}
      >
        {value}
      </button>
    )
  }
}

Button.defaultProps = {
  value: 'button',
  type: 'normal',
  size: 'normal',
  className: ''
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'danger']),
  size: PropTypes.oneOf(['normal', 'big']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
}