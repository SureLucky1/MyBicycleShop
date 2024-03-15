import React, { useState, useContext } from 'react'
import "./productPage.css"
import ShowContext from '../../../index'
import { allProducts } from '../../../data'
import {useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart, decreaseCart } from '../../../component/payment/Redux/cartSlice copy'
import { addPrice, subtractPrice } from '../../../component/payment/Redux/priceSlice'
import SliderComponent from './slider/slider'
const ProductPage = ({result, sortAscending}) => {
    const {index} = useContext(ShowContext);
    console.log(result.All[index])
const [color, setColor] = useState("")
    const handleChoice = (e)=>{
setColor(e.target.value)
    };
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addToCart({
            id: result.All[index].id, 
            title: result.All[index].title, 
            image: result.All[index].img1, 
            price: result.All[index].price}));
        dispatch(addPrice(item.price));
    };

    const handledecreaseCart = (item) => {
        dispatch(decreaseCart({
            id: result.All[index].id, 
            title: result.All[index].title, 
            image: result.All[index].img1, 
            price: result.All[index].price}));
        dispatch(subtractPrice(item.price));
    };
    const cartitems = useSelector(state => state.cart.cartItems);
    console.log(result.All[index].cartQuantity)
    const handlefirstbutton = () =>{
        document.querySelector(".productDetails").style.display = "block";
        document.querySelector(".selectIntro button:first-child").style.borderBottom = "2px solid black";
        document.querySelector(".selectIntro button:first-child").style.color = "black";
        document.querySelector(".selectIntro button:last-child").style.borderBottom = "none";
        document.querySelector(".selectIntro button:last-child").style.color = "gray";
        document.querySelector(".comment").style.display = "none";
    }
    const handlesecondbutton = () =>{
        document.querySelector(".productDetails").style.display = "none";
        document.querySelector(".selectIntro button:first-child").style.borderBottom = "none";
        document.querySelector(".selectIntro button:first-child").style.color = "gray";

        document.querySelector(".selectIntro button:last-child").style.borderBottom = "2px solid black";
        document.querySelector(".selectIntro button:last-child").style.color = "black";
        document.querySelector(".comment").style.display = "flex";
    }
  return (
    <div className='productDescription'>
        <section className='productIntro'>
            <div className='left'>
                <div className='img'>
                <SliderComponent result={result}/>
                </div>
                </div>
            <div className='right'>
                <h1><strong>{result.All[index].title}</strong></h1>
                <div className='sellingPrice'>
                    <span>售價</span>
                    <h4>${result.All[index].price}</h4>
                </div>
                <div className='selectColor'>
                    <h4>選項</h4>
                    <select name="" id="" onChange={handleChoice}>
                    <option value="black">黑色</option>
                    <option value="white">白色</option></select>
                </div>
                <div className='quantity'>
                    <h4>數量</h4>
                    <div>
                    <button  onClick={()=>{handledecreaseCart(result.All[index])}}>-</button>
                    {result.All[index].cartQuantity}
                    <button onClick={()=>{handleAddToCart(result.All[index])}}>+</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductPage