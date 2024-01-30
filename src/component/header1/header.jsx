import React from 'react'
import "./header.css"
const UpperHeader = () => {
    
    const showSidebarLeft = () => {
        const sidebar = document.querySelector('.sidebar-left');
        sidebar.style.display = 'flex';
        // sidebar.style.width = '50%';
    }
    // const hideSidebarLeft = () => {
    //     const sidebar = document.querySelector('.sidebar-left');
    //     sidebar.style.display = 'none';
    //     sidebar.style.width = '0px';
    // }
    const showSidebarRight = () => {
        const sidebar = document.querySelector('.sidebar-right');
        sidebar.style.display = 'flex';
        // sidebar.style.width = '50%';
    }
    const hideSidebarRight = () => {
        const sidebar = document.querySelector('.sidebar-right');
        sidebar.style.display = 'none';
        // sidebar.style.width = '0px';
    }
  return (
    <nav className='nav1'>

<ul className='sidebar-right'>
    <li className="" onClick={hideSidebarRight}id="">
        <span  class="material-symbols-outlined">
close
</span></li>
    <li className="" id=""><a href="">主頁</a></li>
    <li className="" id=""><a href="">購物車</a></li>
<li className="" id=""><a href="">語言</a></li>
    <li className="" id=""><a href="">HKD</a></li>
    <li className="" id=""><a href="">註冊</a></li>
    <li className="" id=""><a href="">登入</a></li>
</ul>

{/* <ul className='sidebar-left'>
    <li className="" onClick={hideSidebarLeft}id="">
        <span  class="material-symbols-outlined">
close
</span></li>
    <li className="" id=""><a href="">合法化, 歡迎分銷</a></li>
    <li className="" id=""><a href="">主頁</a></li>
<li className="" id=""><a href="">全部產品</a></li>
    <li className="" id=""><a href="">關於我們</a></li>
    <li className="" id=""><a href="">保養</a></li>
    <li className="" id=""><a href="">私隱, 退款政策</a></li>
    <li className="" id=""><a href="">Legalization, Distribution</a></li>
</ul> */}


<ul className='main'>
<li className="menu-button left" onClick={showSidebarLeft} id="">
        <span className="material-symbols-outlined">
            menu
</span>
</li>
<div className='upper'>
    <ul>
    <li className="hideOnMobile" id=""><a href=""><ul>
    <li className="hideOnMobile" id=""><a href="">語言</a></li>
    <li className="hideOnMobile" id=""><a href="">HKD</a></li>
    <li className="hideOnMobile" id=""><a href="">搜尋</a></li>
    </ul></a></li>

    <li className="hideOnMobile" id=""><a href="">主頁</a></li>
    <li className="hideOnMobile" id=""><a href="">購物車</a></li>
    <li className="hideOnMobile" id=""><a href="">註冊</a></li>
    <li className="hideOnMobile" id=""><a href="">登入</a></li>
    </ul>
</div>
{/* <h1>Shop</h1>
<div className='down'>
    <ul>
    <li className="hideOnMobile" id=""><a href="">合法化, 歡迎分銷</a></li>
    <li className="hideOnMobile" id=""><a href="">主頁 Home</a></li>
<li className="hideOnMobile" id=""><a href="">全部產品 Products</a></li>
    <li className="hideOnMobile" id=""><a href="">關於我們 About Us</a></li>
    <li className="hideOnMobile" id=""><a href="">保養 Maintenance</a></li>
    <li className="hideOnMobile" id=""><a href="">私隱, 退款政策 Privacy, Refund</a></li>
    <li className="hideOnMobile" id=""><a href="">Legalization, Distribution</a></li>
    </ul>
    </div>
 */}    
 <li className="menu-button right" onClick={showSidebarRight} id="">
        <span className="material-symbols-outlined">
            menu
</span>
</li>
</ul>
    </nav>
  )
}

export default UpperHeader