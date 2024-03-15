import React, { useState, useContext, useEffect } from 'react'
import "./productPage.css"
import ShowContext from '../../../index'
import { allProducts } from '../../../data'
import {useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart, decreaseCart } from '../../../component/payment/Redux/cartSlice copy'
import { addPrice, subtractPrice } from '../../../component/payment/Redux/priceSlice'
import SliderComponent from './slider/slider'
const ProductPage = ({result, sortAscending}) => {
    const cartitems = useSelector(state => state.cart.cartItems);
    const {index, qty, setQty} = useContext(ShowContext);
    useEffect(()=>{
        if(cartitems.length === 0){
            setQty(0)
        }else{cartitems.forEach((item)=>{
              if(item.id === (index)){
    setQty(item.cartQuantity)
        }else{
            setQty(0)
        }
        })
        
    }
    } , [cartitems, cartitems.length])
    console.log(cartitems, index, result.All[index-1])
const [color, setColor] = useState("")
    const handleChoice = (e)=>{
setColor(e.target.value)
    };
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addToCart({
            id: result.All[index-1].id, 
            title: result.All[index-1].title, 
            image: result.All[index-1].img1, 
            price: result.All[index-1].price}));
        dispatch(addPrice(item.price));
    };

    const handledecreaseCart = (item) => {
        dispatch(decreaseCart({
            id: result.All[index-1].id, 
            title: result.All[index-1].title, 
            image: result.All[index-1].img1, 
            price: result.All[index-1].price}));
        dispatch(subtractPrice(item.price));
    };

    const handlefirstbutton = () =>{
        document.querySelector(".productDetails").style.display = "block";
        document.querySelector(".selectIntro button:first-child").style.borderBottom = "2px solid black";
        document.querySelector(".selectIntro button:first-child").style.color = "black";
        document.querySelector(".selectIntro button:last-child").style.borderBottom = "none";
        document.querySelector(".selectIntro button:last-child").style.color = "gray";
        document.querySelector(".comment").style.display = "none";
    }
    useEffect(()=>{
        handlefirstbutton();
    },[])
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
                <h1><strong>{result.All[index-1].title}</strong></h1>
                <div className='sellingPrice'>
                    <span>售價</span>
                    <h4>${result.All[index-1].price}</h4>
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
                    <button  onClick={()=>{handledecreaseCart(result.All[index-1]);}}>-</button>
                    {qty}
                    <button onClick={()=>{handleAddToCart(result.All[index-1]);}}>+</button>
                    </div>
                </div>
<div className='involve'>
    <button onClick={()=>{handleAddToCart(result.All[index-1]);}}>加進購物車</button>
    <button>直接下單</button>
</div>
<button className='contact'>聯絡店主</button>
            </div>
        </section>
        <section className='second-Part'>
            <div className='selectIntro'>
            <button onClick={handlefirstbutton}>商品簡介</button>
            <button onClick={handlesecondbutton}>評價</button>
            </div>
<div className='details'>
    <div className="productDetails">
        <p>{result.All[index-1].intro1}</p>
        <p>{result.All[index-1].intro2}</p>
        <p>{result.All[index-1].intro3}</p>
        <p>{result.All[index-1].intro4}</p>
        <p>{result.All[index-1].intro5}</p>
    </div>
    <div className='comment'>
    <p>產品還沒有評價，為這個產品建立第一個評價</p>

    </div>
</div>
        </section>
    </div>
  )
}

export default ProductPage