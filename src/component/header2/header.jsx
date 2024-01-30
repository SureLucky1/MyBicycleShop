import React from 'react'
import "./header.css"
const LowerHeader = () => {
    
    // const showSidebarLeft = () => {
    //     const sidebar = document.querySelector('.sidebar-left');
    //     sidebar.style.display = 'flex';
    //     sidebar.style.width = '100%';
    // }
    const hideSidebarLeft = () => {
        const sidebar = document.querySelector('.sidebar-left');
        sidebar.style.display = 'none';
        // sidebar.style.width = '0px';
    }
    // const showSidebarRight = () => {
    //     const sidebar = document.querySelector('.sidebar-right');
    //     sidebar.style.display = 'flex';
    //     sidebar.style.width = '100%';
    // }
    // const hideSidebarRight = () => {
    //     const sidebar = document.querySelector('.sidebar-right');
    //     sidebar.style.display = 'none';
    //     sidebar.style.width = '0px';
    // }
  return (
    <nav className='nav2'>
<ul className='sidebar-left'>
    <li className="sidebar-left-close" onClick={hideSidebarLeft}id="">
        <span  class="material-symbols-outlined left">
close
</span></li>
    <li className="" id=""><a href="">合法化, 歡迎分銷</a></li>
    <li className="" id=""><a href="">主頁</a></li>
<li className="" id=""><a href="">全部產品</a></li>
    <li className="" id=""><a href="">關於我們</a></li>
    <li className="" id=""><a href="">保養</a></li>
    <li className="" id=""><a href="">私隱, 退款政策</a></li>
    <li className="" id=""><a href="">Legalization, Distribution</a></li>
</ul>


<ul className='main2'>
    <div>
<h1>Shop</h1>
</div>
    <ul>
    <li className="hideOnMobile" id=""><a href="">合法化, 歡迎分銷</a></li>
    <li className="hideOnMobile" id=""><a href="">主頁 Home</a></li>
<li className="hideOnMobile" id=""><a href="">全部產品 Products</a></li>
    <li className="hideOnMobile" id=""><a href="">關於我們 About Us</a></li>
    <li className="hideOnMobile" id=""><a href="">保養 Maintenance</a></li>
    <li className="hideOnMobile" id=""><a href="">私隱, 退款政策 Privacy, Refund</a></li>
    <li className="hideOnMobile" id=""><a href="">Legalization, Distribution</a></li>
    </ul>
</ul>
    </nav>
  )
}

export default LowerHeader