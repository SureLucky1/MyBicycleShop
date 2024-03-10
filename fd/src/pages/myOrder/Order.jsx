import React, {useState, useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseCart, removeFromCart, clearCart } from '../../component/payment/Redux/cartSlice';
import { addPrice, subtractPrice, clearTotal } from '../../component/payment/Redux/priceSlice';
import { Table, Button } from 'reactstrap';
import ShowContext from '../../index';
import {createOrder} from "../../actions/orderAction"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css'
const Order = () => {
    const cartitems = useSelector(state => state.cart.cartItems);
    const {price, quantity, setQuantity, chooseRecord, setChooseRecord} = useContext(ShowContext);

    console.log(cartitems)
useEffect(()=>{
    if(chooseRecord === null)
    setChooseRecord(cartitems);
}, [chooseRecord])
console.log(chooseRecord)

    return (
        <body>
            <div className="checkout-wrapper">
            <h4>使用者>Orders</h4>
                <section>
                    <h1>購物記錄</h1>
                    <Table style={{width:"100%"}}>
                        <thead>
                            <tr>
                                <th style={{width:"5%"}}>
                                    <input type='checkbox'/>
                                </th>
                                <th style={{width:"10%"}}>
                                    商品
                                </th>
                                <th style={{width:"55%"}}>
                                    商品簡介
                                </th>
                                <th style={{width:"12%"}}>
                                    數量
                                </th>
                                <th style={{width:"13%"}}>
                                    價錢
                                </th>
                                <th style={{width:"5%"}}>
                                    動作
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {chooseRecord.map((item, id ) => (
                                item.record.map((subitem, id)=>(
                                <tr key={id} className="list" style={{padding: "50px 50px"}}>
                                    <th><input type='checkbox'/></th>
                                    <td><img src={subitem.image} className="c-image" alt='' /></td>
                                    <td >{subitem.name}</td>
                                    <td><p >{subitem.quantity}</p></td>
                                    <td style={{display:"flex", textAlign: "right"}}><p >${subitem.price}</p></td>
                                </tr>
                                ))))}               
                        </tbody>
                    </Table>
                </section>
            </div>
        </body>
    )
}

export default Order
