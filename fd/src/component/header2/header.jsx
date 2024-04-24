import React,{ useState, useContext}  from 'react'
import ShowContext from '../..';
import "./header.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
const LowerHeader = () => {
  const { t, i18n } = useTranslation();
  const {pathname} = useLocation()
  const {leftsidebardisplay, setLeftSideBarDisplay} = useContext(ShowContext);
  
    // const showSidebarLeft = () => {
    //     const sidebar = document.querySelector('.sidebar-left');
    //     sidebar.style.display = 'flex';
    //     sidebar.style.width = '100%';
    // }
    const hideSidebarLeft = () => {
        // const sidebar = document.querySelector('.sidebar-left');
        // sidebar.style.display = 'none';
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
<ul className='sidebar-left' style={{display: leftsidebardisplay}}>
    <li className="" id=""><Link
    className='link-item'
                    to="legalization"
                    style={{ textDecoration: "none" }}
                  >{t("legal")}</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="/"
                    style={{ textDecoration: "none" }}
                  >{t("home")}</Link></li>
<li className="" id=""><Link
    className='link-item'
                    to="product/"
                  >{t("product")}</Link></li>
    <li className="" id="">                  
    <Link
    className='link-item'
                    to="about-us/"
                    style={{ textDecoration: "none" }}
                  >{t("aboutUs")}</Link> </li>
    <li className="" id=""><Link
    className='link-item'
                    to="maintenance/"
                    style={{ textDecoration: "none" }}
                  >{t("maintenance")}</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="privacy"
                    style={{ textDecoration: "none" }}
                  >{t("privacyRefund")}</Link></li>
</ul>

<ul className={["/", "/productInfo", "/maintenance/", "/legalization", "/product/", "/about-us/", "/privacy", "/maintenanceEng/"].includes(pathname) ? 'main2 show' : 'main2'}>
    <div className='shopName'>
<h1><Link to="/" style={{ textDecoration: "none", color:"black" }}>{t("shopName")}</Link></h1>
</div>
    <ul>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="legalization"
                  >{t("legal")}</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="/"
                  >{t("home")}</Link></li>
<li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="product/"
                  >{t("product")}</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="about-us/"
                  >{t("aboutUs")}</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="maintenance/"
                  >{t("maintenance")} </Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="privacy"
                  >{t("privacyRefund")}</Link></li>
    </ul>
</ul>
    </nav>
  )
}

export default LowerHeader