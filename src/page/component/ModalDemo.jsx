import React, { PureComponent } from 'react'
import Button from '@component/Button'
import Modal from '@component/Modal'

export default class ButtonDemo extends PureComponent {
  constructor () {
    super()
  }
  showModal = () => {
    this.modal.showModal()
  }
  render () {
    return (
      <div>
        <Button value="showModal" onClick={this.showModal} />
        <Modal ref={ref => this.modal = ref} >
          <div>
            <h4>this is modal</h4>
          </div>
        </Modal>
      </div>
    )
  }
}