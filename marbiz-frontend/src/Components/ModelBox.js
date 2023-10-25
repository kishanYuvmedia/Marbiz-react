import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
const ModelBox = props => {
  return (
    <Modal
      isOpen={props.modelValue}
      size={props.sizeValue}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabindex="-1"
      toggle={() => props.modelSetValue(false)}
    >
      <div className="modal-content">
        <ModalHeader toggle={() => props.modelSetValue(false)}>
          <label style={{color:'black'}}>{props.titleLabel}</label>
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </div>
    </Modal>
  )
}
export default ModelBox
