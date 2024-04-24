import React, {useState, useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseCart, removeFromCart, clearCart } from '../../component/payment/Redux/cartSlice';
import { addPrice, subtractPrice, clearTotal } from '../../component/payment/Redux/priceSlice';
import { Table, Button } from 'reactstrap';
import ShowContext from '../../index';
import {createOrder} from "../../actions/orderAction"
import { useNavigate, Link } from "react-router-dom";
import { moneyData } from '../../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './order.css'
const Order = () => {
    const cartitems = useSelector(state => state.cart.cartItems);
    const {moneyIndex, price, quantity, setQuantity, chooseRecord, setChooseRecord} = useContext(ShowContext);

    console.log(cartitems)
useEffect(()=>{
    if(chooseRecord === null)
    setChooseRecord(cartitems);
}, [chooseRecord])
console.log(chooseRecord)

    return (
        <body>
            <div className="order-wrapper">
            <h4><Link to="/profile/" style={{textDecoration: "none", color: "black"}}>使用者</ Link>>Orders</h4>
                <section>
                    <h1>購物記錄</h1>
                    <Table className="laptop" style={{width:"100%"}}>
                        <thead>
                            <tr>
                                <th >
                                    <input type='checkbox'/>
                                </th>
                                <th >
                                    商品
                                </th>
                                <th >
                                    商品簡介
                                </th>
                                <th >
                                    數量
                                </th>
                                <th >
                                    價錢
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
                                    <td style={{display:"flex", textAlign: "right"}}><p >{moneyData[moneyIndex].symbol} {Math.floor(subitem.price * moneyData[moneyIndex].currency)}</p></td>
                                </tr>
                                ))))}               
                        </tbody>
                    </Table>
                    <Table className="mobile" style={{width:"100%"}}>
                        <thead>
                            <tr>
                                <th>
                                    <input type='checkbox'/>
                                </th>
                                <th>
                                    商品
                                </th>
                                <th>
                                    商品簡介
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {chooseRecord.map((item, id ) => (
                                item.record.map((subitem, id)=>(
                                <tr key={id} className="list" style={{padding: "5px 0px"}}>
                                    <th><input type='checkbox'/></th>
                                    <td colspan="1">
                                        <div className='img'>
                                        <img src={subitem.image} className="c-image" alt='' />
                                        </div>
</td>
                                    <td colspan="3">
                                        <div>

                                        {subitem.name}
                                    <p >{subitem.quantity}</p>
                                    <p >${subitem.price}</p>
                                        </div>
                                        </td>
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
