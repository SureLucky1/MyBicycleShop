import React from 'react'
import "./header.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
const LowerHeader = () => {
  const {pathname} = useLocation()
    // const showSidebarLeft = () => {
    //     const sidebar = document.querySelector('.sidebar-left');
    //     sidebar.style.display = 'flex';
    //     sidebar.style.width = '100%';
    // }
    const hideSidebarLeft = () => {
        const sidebar = document.querySelector('.sidebar-left');
        sidebar.style.display = 'none';
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
    <nav  className='nav2' >
<ul className='sidebar-left'>
    <li className="sidebar-left-close" onClick={hideSidebarLeft}id="">
        <span  class="material-symbols-outlined left">
close
</span></li>
    <li className="" id=""><Link
    className='link-item'
                    to="legalization"
                    style={{ textDecoration: "none" }}
                  >合法化, 歡迎分銷</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="/"
                    style={{ textDecoration: "none" }}
                  >主頁 Home</Link></li>
<li className="" id=""><Link
    className='link-item'
                    to="product/"
                  >全部產品 Products</Link></li>
    <li className="" id="">                  
    <Link
    className='link-item'
                    to="about-us/"
                    style={{ textDecoration: "none" }}
                  >關於我們</Link> </li>
    <li className="" id=""><Link
    className='link-item'
                    to="maintenance/"
                    style={{ textDecoration: "none" }}
                  >保養</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="privacy"
                    style={{ textDecoration: "none" }}
                  >私隱, 退款政策</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="maintenanceEng/"
                    style={{ textDecoration: "none" }}
                  >Legalization, Distribution</Link></li>
</ul>

<ul className={["/", "/productInfo", "/maintenance/", "/legalization", "/product/", "/about-us/", "/privacy", "/maintenanceEng/"].includes(pathname) ? 'main2 show' : 'main2'}>
    <div className='shopName'>
<h1>眾樂樂單車店</h1>
</div>
    <ul>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="legalization"
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
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="maintenance/"
                  >保養 Maintenance</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="privacy"
                  >私隱, 退款政策 Privacy, Refund</Link></li>
                  
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="maintenanceEng/"
                  >Legalization, Distribution</Link></li>
    </ul>
</ul>
    </nav>
  )
}

export default LowerHeader