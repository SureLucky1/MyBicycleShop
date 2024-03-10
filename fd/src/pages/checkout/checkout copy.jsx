import React, {useState, useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseCart, removeFromCart, clearCart } from '../../component/payment/Redux/cartSlice';
import { addPrice, subtractPrice, clearTotal } from '../../component/payment/Redux/priceSlice';
import { Table, Button } from 'reactstrap';
import ShowContext from '../../index';
import {createOrder} from "../../actions/orderAction"
import {Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css'
const Checkout = () => {
    const cartitems = useSelector(state => state.cart.cartItems);
    const {price, quantity, setQuantity, chooseRecord, setChooseRecord} = useContext(ShowContext)
    const [name, setName] = useState("");
    const navigate = useNavigate();

    console.log(cartitems)
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

    const handleSubmit = (e) => {

        e.preventDefault();
        //const user = localStorage.getItem('loggedIn') === true;  // 讀取並轉換 loggedIn
const useremail = localStorage.getItem('useremail');  // 讀取 useremail
        if (!useremail) {  // 假設 user 是一個表示當前用戶的變量
            navigate("/login/");  // 如果沒有用戶登入，則導航到登入頁面
            return;  // 結束 handleSubmit 函數
        }else{
    const records = cartitems.map(item => ({
        image: item.image,
        name: item.title,
        quantity: item.cartQuantity,
        price: item.price,
        productId: item.id,
    }));
    const totalPrice = cartitems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
    const itemgroup = {
        record: records,
        cost: totalPrice,
        userId: useremail,
    };

        //console.log(name, price, quantity, productId);
        fetch("http://localhost:5000/addP", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(itemgroup),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              alert("Purchase Successful");
            } else {
              alert("Something went wrong");
            }
          });


          dispatch(clearCart());
          dispatch(clearTotal());
        }

    };
  
    return (
        <body>
            <div className="checkout-wrapper">
                <h4><Link
    className='link-item'
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}>主頁</Link>>購物車</h4>
                <div className='become-member'>
                    <h4>成為 眾樂樂單車店,電動滑板車 會員?</h4>
                    <p>你可以在這裡 <Link
                    to="/register/"
                    style={{ textDecoration: "underline", color: "black" }}
                  ><em>註冊</em></Link> 或 <Link
                  className='link-item'
                  to="/login/"
                                  style={{ textDecoration: "underline", color: "black" }}
                                ><em><strong>登入</strong></em></Link>.</p>
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
                            {cartitems.map((item, id ) => (
                                <tr key={id} className="list" style={{padding: "50px 50px"}}>
                                    <th><input type='checkbox'/></th>
                                    <td><img src={item.image} className="c-image" alt='' /></td>
                                    <td >{item.title}</td>
                                    <td><Button  onClick={()=>{handledecreaseCart(item)}}>-</Button><p >{item.cartQuantity}</p><Button onClick={()=>{handleAddToCart(item)}}>+</Button></td>
                                    <td style={{display:"flex", textAlign: "right"}}><p >${item.price * item.cartQuantity}</p></td>
                                    <td><button className="btn btn-warning btn-sm" onClick={() => handleRemoveFromCart(item)}>Remove</button></td>
                                </tr>
                            ))
}
                            <tr>
                                <th scope="row"colspan="3">
                                    2
                                </th>
                                <td>
                                    @fat
                                </td>
                                <td colspan="2">
                                    <Button onClick={handleSubmit}>前往結算</Button>
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
