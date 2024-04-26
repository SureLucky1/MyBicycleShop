import React, {useState, useContext, useEffect, useMemo, useCallback} from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseCart, removeFromCart, clearCart, setCurrency2} from '../../component/payment/Redux/cartSlice copy';
import { addPrice, subtractPrice, clearTotal }  from '../../component/payment/Redux/priceSlice';
import { Table, Button } from 'reactstrap';
import ShowContext from '../../index';
import {createOrder} from "../../actions/orderAction"
import {Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation, Trans } from 'react-i18next';
import Modal from './Modal/Modal2'  
import './checkout.css'
import { allChProducts, allEngProducts, moneyData, allSimpleChProducts } from '../../data.jsx';

const Checkout = () => {
    const { t, i18n } = useTranslation();
    const cartitems = useSelector(state => state.cart.cartItems);
    //const {cartQuantity} = cartitems.item
    const [display, setDisplay] = useState("flex");
    const [index, setIndex] = useState(50);
    const [showModal, setShowModal] = useState(false);
    const [overflow, setOverflow] = useState('none');
    const navigate = useNavigate();
    const [itemTitle, setItemTitle] = useState()
    const {setQty, qty, Total, moneyIndex, Lan} = useContext(ShowContext);
    console.log(Total)
    //const Total = useSelector(state => state.price.total);
    const dispatch = useDispatch();
    const cartQuantities = cartitems.map(item => item.cartQuantity);
    let total = 0;
    localStorage.setItem("totalValue", JSON.stringify(total));
    const [sum, setSum] = useState(total);
    // const expensiveCalculation = (Total) => {
        //     const sum = Total;
        //     return sum
        //   };
        useEffect(()=>{
        cartitems.forEach(item => {
            console.log(allChProducts.All[item.id-1].title)
            console.log(item.title)
            if(Lan === "繁體中文"){
                setItemTitle(allChProducts.All[item.id-1].title)
              } else if(Lan === "简体中文"){
                setItemTitle(allSimpleChProducts.All[item.id-1].title)
              } else if(Lan === "English"){
                setItemTitle(allEngProducts.All[item.id-1].title)
              }
          total += item.price * item.cartQuantity * moneyData[moneyIndex].currency;
        });
      
        if (total <= 0) {
          setSum(0);
          localStorage.setItem("totalValue", 0);
        } else {
          setSum(total);
        }
}
        //expensiveCalculation(Total)
    , [ cartQuantities, cartitems, moneyIndex, Lan])
//     const call = useMemo(()=>{
//         const mm = Total;
// return mm;

//     })
    //localStorage.setItem("totalValue", sum);
    //const storedTotal = localStorage.getItem("totalValue");
    const handleAddToCart = (item, curr) => {
        dispatch(addToCart(item));
        //dispatch(setCurrency2(curr))
        dispatch(addPrice({productId: item.id}));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
        dispatch(subtractPrice({productId: item.id}));
    };
    const handledecreaseCart = (item) => {
        dispatch(decreaseCart(item));
        dispatch(subtractPrice({productId: item.id}));
    };

    const handleSubmit = (e) => {   
        e.preventDefault();
        //const user = localStorage.getItem('loggedIn') === true;  // 讀取並轉換 loggedIn
const useremail = localStorage.getItem('useremail');  // 讀取 useremail
        if (!useremail) {  // 假設 user 是一個表示當前用戶的變量
            navigate("/login/");  // 如果沒有用戶登入，則導航到登入頁面
            return;  // 結束 handleSubmit 函數
        }else{
    setShowModal(true);
        }
    };
  
    return (
        <body>
            <div className="checkout-wrapper">
                <h4><Link
    className='link-item'
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}>{t("home")}</Link>{">"}{t("cart")}</h4>
                <div className='become-member'>
                    <h4>{t("become")}</h4>
                    <p>{t("here")} <Link
                    to="/register/"
                    style={{ textDecoration: "underline", color: "black" }}
                  ><em>{t("signUp")}</em></Link> {t("or")} <Link
                  className='link-item'
                  to="/login/"
                                  style={{ textDecoration: "underline", color: "black" }}
                                ><em><strong>{t("login")}</strong></em></Link>.</p>
                </div>
                <section>
                    <h1>{t("cart")}</h1>
                    <Button>{t("removeChoice")}</Button>
                    <Table className='max' style={{width:"100%"}}>
                        <thead >
                            <tr>
                                <th >
                                    <input type='checkbox'/>
                                </th>
                                <th>
                                {t("merchandise")}
                                </th>
                                <th>
                                {t("productIntro")}
                                </th>
                                <th>
                                {t("qty")}
                                </th>
                                <th>
                                {t("price")}
                                </th>
                                <th>
                                {t("action")}
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {cartitems.map((item, id ) => (
                                <tr key={id} className="list" style={{padding: "50px 50px"}}>
                                    <th><input type='checkbox'/></th>
                                    <td><img src={item.image} className="c-image" alt='' /></td>
                                    <td >{itemTitle}</td>
                                    <td><Button  onClick={()=>{handledecreaseCart({id: item.id, title: item.title, image: item.img1, price: Number(item.price), curr: moneyData[moneyIndex].currency});setQty(cartitems[id].cartQuantity);}}>-</Button><p >{item.cartQuantity}</p>
                                    <Button onClick={()=>{handleAddToCart({id: item.id, title: item.title, image: item.img1, price: Number(item.price)});setQty(cartitems[id].cartQuantity);}}>+</Button></td>
                                    <td style={{display:"flex", textAlign: "right"}}><p >{moneyData[moneyIndex].symbol} {Math.floor(item.price * moneyData[moneyIndex].currency) * item.cartQuantity}</p></td>
                                    <td><button className="btn btn-warning btn-sm" onClick={() => handleRemoveFromCart(item)}>Remove</button></td>
                                </tr>
                            ))
}
                            <tr>
                                <th scope="row" colSpan="1.5">
                                </th>
                                <td>
                                </td>
                                <td colSpan="3.5">
                                    <Button onClick={handleSubmit}>{t("checkOut")}</Button>
                                    <span>{t("sum")}：{moneyData[moneyIndex].symbol} {Math.floor(sum)}</span>
                                </td>
                            </tr>                     
   
                        </tbody>

                    </Table>
                    <Table style={{width:"100%"}}>
                        <thead>
                            <tr>
                                <th >
                                    <input type='checkbox'/>
                                </th>
                                <th>
                                {t("merchandise")}
                                </th>
                                <th>
                                {t("productIntro")}
                                </th>
                            </tr>
                        </thead>
                        <tbody className='mini'>
                            {cartitems.map((item, id ) => (
                                <tr key={id} className="list" style={{padding: "50px 50px"}}>
                                    <th><input type='checkbox'/></th>
                                    <td>
                                        <div>
                                            <div className='img'>

                                        <img src={item.image} className="c-image" alt='' />
                                            </div>
                                        <div>
                                    {itemTitle}
                                    <div>
                                    <Button  onClick={()=>{handledecreaseCart(item);setQty(cartitems[id].cartQuantity);}}>-</Button><p >{item.cartQuantity}</p><Button onClick={()=>{handleAddToCart(item);setQty(cartitems[id].cartQuantity);}}>+</Button>
                                    </div>
                                    <p >${item.price * item.cartQuantity}</p>
                                    <button className="btn btn-warning btn-sm" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                                        </div>
                                        </div></td>
                                </tr>
                            ))
}
                            <tr>
                                <th scope="row" colSpan="1">
                                </th>
                                <td colSpan="3">
                                    <Button onClick={handleSubmit}>{t("checkOut")}</Button>
                                    <span>{t("sum")}：${sum}</span>
                                </td>
                            </tr>                     
   
                        </tbody>
                    </Table>
                </section>
                <div style={{display:"flex", justifyContent:"center"}}>
<Modal total={sum} showModal={showModal}setShowModal={setShowModal} setOverflow={setOverflow} setDisplay={setDisplay} setIndex={setIndex}/>
  </div>
            </div>
        </body>
    )
}

export default Checkout
