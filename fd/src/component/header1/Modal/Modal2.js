import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { faEnvelope, faMagnifyingGlass, faHouse, faCartShopping, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { clearCart } from '../../../component/payment/Redux/cartSlice copy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearTotal } from '../../../component/payment/Redux/priceSlice copy';
import ShowContext from '../../..';
import "./Modal.css";
import { MdClose } from 'react-icons/md';
const InputModal = ({ handleSearch, showModal, setShowModal, handleInputChange, query }) => {
const {setSearch} = useContext(ShowContext);
const handleSmallSearch = ()=>{
  setSearch(query)
}
  return (
    <>
      {showModal ? (
        <section className='input-modal' 
        onClick={(e) => {
          if (e.target.className !== "small-input") {
            setShowModal(false);
          }
        }}
        >
          <div>
<div className='input-group' >
  <input   
  className='small-input'    
  onChange={handleInputChange}
  onKeyUp={handleSearch}
  onBlur={() => setShowModal(prev => !prev)}
      value={query} type="text" />
      {/* <FontAwesomeIcon className="modalIcon" icon={faMagnifyingGlass} onClick={handleSmallSearch}/> */}
  </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default InputModal;
