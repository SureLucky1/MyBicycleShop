import './App.css'
import UpperHeader from './component/header1/header.jsx'
import LowerHeader from './component/header2/header.jsx'
import React, { useEffect, useState } from 'react'
import Main from './pages/main/main';
import ShowContext from './index.js';

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
        <Main />
      </div>
    </ShowContext.Provider>
  );
}

export default App;
