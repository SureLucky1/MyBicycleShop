import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../../../component/payment/Redux/cartSlice copy';
import { clearTotal } from '../../../component/payment/Redux/priceSlice copy';
import "./Modal.css";
import { MdClose } from 'react-icons/md';
const InputModal = ({ showModal, setShowModal, handleInputChange, query }) => {


  return (
    <>
      {showModal ? (
        <section className='input-modal' 
        onClick={(e) => {
          if (e.target.className !== 'small-input') {
            setShowModal(false);
          }
        }}
        >
          <div>
<div className='input-group' >
  <input   
  className='small-input'    
  onChange={handleInputChange}
  onBlur={() => setShowModal(prev => !prev)}
      value={query} type="text" />
  </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default InputModal;
