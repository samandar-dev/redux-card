import React from 'react'
import Cart from '../Cart/Cart'
import './Modal.css'

function Modal({ modal, setModal }) {

  return (
    <>
      <div className={`modal ${modal ? "openModal" : "removModal"}`}>
        <button className='removBTn' onClick={() => setModal(false)}>x</button>
        <div className="modal__inner">
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Modal
