import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import "@style/component/modal"

const modalRoot = document.getElementById('modal-root')

export default class Modal extends PureComponent {
  constructor (props) {
    super()
    this.state = { visible: props.appear }
    this.el = document.createElement('div')
  }
  componentDidMount () {
    modalRoot.appendChild(this.el)
  }
  componentWillUnmount () {
    modalRoot.removeChild(this.el)
  }
  showModal = () => {
    this.setState({ visible: true })
  }
  hideModal = () => {
    this.setState({ visible: false })
  }
  renderModal () {
    return createPortal(
      <div className="dh-modal">
        <div className="dh-modal-close-button" onClick={this.hideModal}></div>
        <div className="dh-modal-content">{this.props.children}</div>
      </div>
    , this.el)
  }
  render () {
    const { visible } = this.state
    return visible ? this.renderModal() : null
  }
}

Modal.defaultProps = {
  appear: false
}
Modal.propTypes = {
  appear: PropTypes.bool
}
