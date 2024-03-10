import React from 'react'
import ReactDOM from 'react-dom'
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseCart, removeFromCart, clearCart } from '../../component/payment/Redux/cartSlice';
import { addPrice, subtractPrice } from '../../component/payment/Redux/priceSlice';
import { Table, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css'
const Checkout = () => {
    const cartitems = useSelector(state => state.cart.cartItems);
    const Total = useSelector(state => state.price.total);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(addPrice(item.price));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
        dispatch(subtractPrice(item.price * item.cartQuantity));
    };
    const handledecreaseCart = (item) => {
        dispatch(decreaseCart(item));
        dispatch(subtractPrice(item.price));
    };

    return (
        <body>
            <div className="checkout-wrapper">
                <h4>主頁>購物車</h4>
                <div className='become-member'>
                    <h4>成為 壹壹滑板車,電動滑板車 會員?</h4>
                    <p>你可以在這裡 註冊 或 登入.</p>
                </div>
                <section>
                    <h1>購物車</h1>
                    <Button>移除已選</Button>
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
                            {cartitems.map(item => (
                                <tr className="list" style={{padding: "50px 50px"}}>
                                    <th><input type='checkbox'/></th>
                                    <td><img src={item.image} className="c-image" alt='' /></td>
                                    <td>{item.title}</td>
                                    <td><Button onClick={()=>{handledecreaseCart(item)}}>-</Button>{item.cartQuantity}<Button onClick={()=>{handleAddToCart(item)}}>+</Button></td>
                                    <td style={{display:"flex", textAlign: "right"}}>${item.price * item.cartQuantity}</td>
                                    <td><button className="btn btn-warning btn-sm" onClick={() => handleRemoveFromCart(item)}>Remove</button></td>
                                </tr>
                            ))}
                            <tr>
                                <th scope="row"colspan="3">
                                    2
                                </th>
                                <td>
                                    @fat
                                </td>
                                <td colspan="2">
                                    <Button>前往結算</Button>
                                    <span>總金額：${Total}</span>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
        </body>
    )
}

export default Checkout
