import React from 'react'
import "./header.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    <li className="" id=""><Link
    className='link-item'
                    to="legalization"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >合法化, 歡迎分銷</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >主頁 Home</Link></li>
<li className="" id=""><a href="">全部產品</a></li>
    <li className="" id="">                  
    <Link
    className='link-item'
                    to="about-us/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >關於我們</Link> </li>
    <li className="" id=""><a href="">保養</a></li>
    <li className="" id=""><a href="">私隱, 退款政策</a></li>
    <li className="" id=""><a href="">Legalization, Distribution</a></li>
</ul>


<ul className='main2'>
    <div>
<h1>Shop</h1>
</div>
    <ul>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="legalization"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >合法化, 歡迎分銷</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="/"
                  >主頁 Home</Link></li>
<li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="product/"
                  >全部產品 Products</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="about-us/"
                  >關於我們</Link></li>
    <li className="hideOnMobile" id=""><a href="">保養 Maintenance</a></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="privacy"
                  >私隱, 退款政策 Privacy, Refund</Link></li>
    <li className="hideOnMobile" id=""><a href="">Legalization, Distribution</a></li>
    </ul>
</ul>
    </nav>
  )
}

export default LowerHeader