import './App.css'
import { Provider, useDispatch } from "react-redux";

import UpperHeader from './component/header1/header.jsx'
import LowerHeader from './component/header2/header.jsx'
import React, { useEffect, useState, useMemo } from 'react'
import Main from './pages/main/main';
import AboutUs from './pages/Abous/abousUs.jsx';
import Login from './pages/login/login.jsx';
import Privacy from './pages/Privacy/privacy.jsx';
import Legalization from './pages/legalization and distribution/legalization.jsx';
import Productlist from './pages/Products/productlist.jsx';
import Maintenance from './pages/Maintenance/maintenance.jsx';
import LegalizationEng from './pages/legalization and distribution/legalizationEng.jsx';
import Register from './pages/register/register.jsx';
import ShowContext from './index.js';
import { allProducts } from './data.jsx';
import Checkout from './pages/checkout/checkout copy.jsx';
import { addToCart } from './component/payment/Redux/cartSlice copy.jsx';
import { addPrice } from './component/payment/Redux/priceSlice.jsx';
import { Routes, Route } from "react-router-dom";
function App() {
  //const defaultPrice = {price: { min: 0, max: 10000 }};
  const [selectedPrice, setSelectedPrice] = useState({price:{ min: 0, max: 10000 }});
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(10000);
  const [selectedCategory, setSelectedCategory] = useState("Electric Mobility");


  const [sortedProducts, setSortedProducts] = useState(null);


  //  const min = 0;
  //  const max = 10000;
  // const [minVal, setMinVal] = useState(min);
  // const [maxVal, setMaxVal] = useState(max);

  // const onChange = ({ min, max }) => {
  //   console.log(`min = ${min}, max = ${max}`);
  //   setSelectedPrice({price: { min, max } });
  //   setMinVal(min);
  // setMaxVal(max);
  // };
  //const [selectedPrice, setSelectedPrice] = useState({price:{ min: 0, max: 10000 }});
  const dispatch = useDispatch()
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = allProducts.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleminChange = (event) => {

    setSelectedMinPrice(event.target.value.toString());

  };
  const handlemaxChange = (event) => {

    setSelectedMaxPrice(event.target.value.toString());

  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  const sortAscending = (event) => {
    setSortedProducts(event.target.value.toString());
  };
  function filteredData(allProducts, selected, selectedPrice, query, sortOrder) {
    let filteredProducts = allProducts;

    // Filtering Input Items
    if (query) {
      filteredProducts = allProducts.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
  
    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, price, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected
      );
    }
  
    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        ({ price }) =>
          price >= selectedPrice.price.min && price <= selectedPrice.price.max
      );
    }
  
    // Sorting should be the last operation

    if (sortOrder === "Asc") {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
        category === selected
      ).sort((a, b) => a.price.toString() - b.price.toString());
    } 
    if (sortOrder === "Desc") {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
        category === selected
      ).sort((a, b) => b.price.toString() - a.price.toString());
    }
  
    return filteredProducts.map((item) => {
      return (
        <div key={item.id} className='product'>
          <img src={item.img1} />
          <h6>{item.title}</h6>
          <span>HKD ${item.price}</span>
          <button className="btn btn-warning" onClick={() => {
            dispatch(addToCart({id: item.id, title: item.title, image: item.img1, price:item.price}));
            dispatch(addPrice(item.price));
          }}>
            Add to cart
          </button>
        </div>
      );
    });
  }
  
  //  function filteredPriceData(selectedP) {
  //    let filteredProducts = allProducts;
  //    // Applying selected filter
  //    if (selectedP) {
  //      filteredProducts = filteredProducts.filter(
  //        ({price }) =>
  //          price >= selectedP.price.min && price <= selectedP.price.max
  //      );
  //    }
    
  //    return filteredProducts.map((item) => {
  //      return (
  //          <div key={item.id} className='product'>
  //              <img src={item.img1} />
  //              <h6>{item.title}</h6>
  //              <span>HKD ${item.price}</span>
  //              <button className="btn btn-warning" onClick={() => {
  //    dispatch(addToCart({id: item.id, title: item.title, image: item.img1, price:item.price}));
  //    dispatch(addPrice(item.price));
  //    }}>
  //      Add to cart
  //  </button>
  //          </div>
  //      );
  //  });
  //  }
  const result = filteredData( allProducts, selectedCategory, selectedPrice, query, sortedProducts);
//  const result2 = filteredPriceData( selectedPrice);
  const [show, setShow] = useState("none");

  useEffect(()=>{
    const sidebar = document.querySelector('.leftSidebar');
    sidebar.style.display = show;
    sidebar.style.width = '60vw';
  }, [show])

  const hideSidebar = () => {
    setShow("none")
  }

  const showSidebar = () => {
    setShow("flex")
  }

  return (
    <ShowContext.Provider value={{sortedProducts, setSortedProducts, setSelectedPrice, selectedMinPrice, selectedMaxPrice, setSelectedMinPrice, setSelectedMaxPrice, show, setShow, query, setQuery, selectedCategory, setSelectedCategory}}>
      <div className="App">
        <div onMouseLeave={hideSidebar} onMouseEnter={showSidebar} className='leftSidebar'>
          <h1><strong>商品分類</strong></h1>
          <h1>全部商品</h1>
          <select onChange={handleClick}>
        <option value="Outdoor">戶外運動 Outdoor</option>
        <option value="Electric Mobility">電動可移動工具 Electric Mobility</option>
        <option value="Manual Bicycle">人力滑板車, 單車 Manual Bicycle</option>
        <option value="Accessories">配件類 Accessories</option>
      </select>
        </div>
        <UpperHeader query={query} handleInputChange={handleInputChange}/>
        <LowerHeader />
        <Routes>
        <Route path="/" element={<Main result={result} handleClick={handleClick} query={query} handleInputChange={handleInputChange}/>} />
        <Route path="about-us/" element={<AboutUs />} />
        <Route path="privacy/" element={<Privacy />} />
      <Route path="legalization" element={<Legalization />} />
       <Route path="product/" element={<Productlist sortAscending={sortAscending}result={result} query={query} handlemaxChange={handlemaxChange}  handleminChange={ handleminChange} handleInputChange={handleInputChange} handleClick={handleClick}/>} />
      <Route path="maintenance/" element={<Maintenance />} />
      <Route path="maintenanceEng/" element={<LegalizationEng />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="register/" element={<Register />} />
      <Route path="login/" element={<Login />} />
      </Routes>
        
      </div>
    </ShowContext.Provider>
  );
}

export default App;
