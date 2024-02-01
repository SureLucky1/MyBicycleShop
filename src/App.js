import './App.css'
import UpperHeader from './component/header1/header.jsx'
import LowerHeader from './component/header2/header.jsx'
import React, { useEffect, useState } from 'react'
import Main from './pages/main/main';
import AboutUs from './pages/Abous/abousUs.jsx';
import Privacy from './pages/Privacy/privacy.jsx';
import Legalization from './pages/legalization and distribution/legalization.jsx';
import Productlist from './pages/Products/productlist.jsx';
import ShowContext from './index.js';
import { Routes, Route } from "react-router-dom";
function App() {
  const [show, setShow] = useState("flex");

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
    <ShowContext.Provider value={{show, setShow}}>
      <div className="App">
        <div onMouseLeave={hideSidebar} onMouseEnter={showSidebar} className='leftSidebar'>
          <h1><strong>商品分類</strong></h1>
          <h1>全部商品</h1>
          <select>
            <option value="asdf">戶外運動 Outdoor</option>
            <option value="asdf">電動可移動工具 Electric Mobility</option>
            <option value="asdf">人力滑板車, 單車 Manual Bicycle</option>
            <option value="asdf">配件類 Accessories</option>
          </select>
        </div>
        <UpperHeader />
        <LowerHeader />
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about-us/" element={<AboutUs />} />
        <Route path="privacy/" element={<Privacy />} />
      <Route path="legalization" element={<Legalization />} />
       <Route path="product/" element={<Productlist />} />
       {/*     <Route path="genres/specialitems" element={<SpecialPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="shoppingcart" element={<ShoppingCartPage />} />
        <Route path="signup" element={<SignUpPage />} /> */}
      </Routes>
        
      </div>
    </ShowContext.Provider>
  );
}

export default App;
