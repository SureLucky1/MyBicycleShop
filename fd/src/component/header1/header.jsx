import React, { useState, useContext} from 'react';
import { ArrowRightOutlined, CopyrightOutlined, GlobalOutlined, ShoppingCartOutlined, SolutionOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom'
import ShowContext from '../..';
import { Link, useLocation, useNavigate,   } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass, faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./header.css"
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
  } from 'reactstrap';
const UpperHeader = ({ handleInputChange, query, handleClick }) => {
  const {chooseRecord, setChooseRecord, login, setLogin} = useContext(ShowContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [dropdownOpenLan, setDropdownOpenLan] = useState(false);
    const toggleLan = () => setDropdownOpenLan((prevState) => !prevState);
    const showSidebarLeft = () => {
        const sidebar = document.querySelector('.sidebar-left');
        sidebar.style.display = 'flex';
    }
    // const hideSidebarLeft = () => {
    //     const sidebar = document.querySelector('.sidebar-left');
    //     sidebar.style.display = 'none';
    //     sidebar.style.width = '0px';
    // }
    const showSidebarRight = () => {
        const sidebar = document.querySelector('.sidebar-right');
        sidebar.style.display = 'flex';
         sidebar.style.width = '50%';
    }
    const hideSidebarRight = () => {
        const sidebar = document.querySelector('.sidebar-right');
        sidebar.style.display = 'none';
        // sidebar.style.width = '0px';
    }
    const [Lan, setLan] = useState("繁體中文")
    const [money, setMoney] = useState("HKD")
  return (
    <nav className='nav1'>

<ul className='sidebar-right'>
    <li className="" onClick={hideSidebarRight}id="">
        <span  class="material-symbols-outlined">
close
</span></li>
    <li className="" id=""><Link
    className='link-item'
                    to="/"
                  ><HomeOutlined />主頁</Link></li>
    <li className="" id=""><Link
    className='link-item'
                    to="checkout/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  ><ShoppingCartOutlined />購物車</Link></li>
<li className="me-1" id=""><GlobalOutlined />{Lan}
<div>
      <ul className="dropdown-menu">
    <li onClick={()=>{setLan('繁體中文')}}>繁體中文</li>
    <li onClick={()=>{setLan('普通話')}}>普通話</li>
    <li onClick={()=>{setLan('English')}}>English</li>
</ul>
      </div>
</li>
    <li className="me-2" id="">
    <CopyrightOutlined />{money}
      <div>
      <ul className="dropdown-menu">
    <li onClick={()=>{setMoney('ALL')}}>ALL</li>
    <li onClick={()=>{setMoney('AED')}}>AED</li>
    <li onClick={()=>{setMoney('AFN')}}>AFN</li>
    <li onClick={()=>{setMoney('AMD')}}>AMD</li>
    <li onClick={()=>{setMoney('ANG')}}>ANG</li>
    <li onClick={()=>{setMoney('AOA')}}>AOA</li>
    <li onClick={()=>{setMoney('ARS')}}>ARS</li>
    <li onClick={()=>{setMoney('AUD')}}>AUD</li>
    <li onClick={()=>{setMoney('AWG')}}>AWG</li>
    <li onClick={()=>{setMoney('AZN')}}>AZN</li>
    <li onClick={()=>{setMoney('BAM')}}>BAM</li>
    <li onClick={()=>{setMoney('BBD')}}>BBD</li>
    <li onClick={()=>{setMoney('BDT')}}>BDT</li>
    <li onClick={()=>{setMoney('BGN')}}>BGN</li>
    <li onClick={()=>{setMoney('BHD')}}>BHD</li>
    <li onClick={()=>{setMoney('BIF')}}>BIF</li>
    <li onClick={()=>{setMoney('BMD')}}>BMD</li>
    <li onClick={()=>{setMoney('BOB')}}>BOB</li>
    <li onClick={()=>{setMoney('BRL')}}>BRL</li>
    <li onClick={()=>{setMoney('BSD')}}>BSD</li>
    <li onClick={()=>{setMoney('BTC')}}>BTC</li>
    <li onClick={()=>{setMoney('BTN')}}>BTN</li>
    <li onClick={()=>{setMoney('BWP')}}>BWP</li>
    <li onClick={()=>{setMoney('BYN')}}>BYN</li>
    <li onClick={()=>{setMoney('BYR')}}>BYR</li>
    <li onClick={()=>{setMoney('BZD')}}>BZD</li>
    <li onClick={()=>{setMoney('CAD')}}>CAD</li>
    <li onClick={()=>{setMoney('CDF')}}>CDF</li>
    <li onClick={()=>{setMoney('CHF')}}>CHF</li>
    <li onClick={()=>{setMoney('CLF')}}>CLF</li>
    <li onClick={()=>{setMoney('CLP')}}>CLP</li>
    <li onClick={()=>{setMoney('CNY')}}>CNY</li>
    <li onClick={()=>{setMoney('COP')}}>COP</li>
    <li onClick={()=>{setMoney('CRC')}}>CRC</li>
    <li onClick={()=>{setMoney('CUC')}}>CUC</li>
    <li onClick={()=>{setMoney('CUP')}}>CUP</li>
    <li onClick={()=>{setMoney('CVE')}}>CVE</li>
    <li onClick={()=>{setMoney('CZK')}}>CZK</li>
    <li onClick={()=>{setMoney('DJF')}}>DJF</li>
    <li onClick={()=>{setMoney('DKK')}}>DKK</li>
    <li onClick={()=>{setMoney('DOP')}}>DOP</li>
    <li onClick={()=>{setMoney('DZD')}}>DZD</li>
    <li onClick={()=>{setMoney('EGP')}}>EGP</li>
    <li onClick={()=>{setMoney('ERN')}}>ERN</li>
    <li onClick={()=>{setMoney('ETB')}}>ETB</li>
    <li onClick={()=>{setMoney('EUR')}}>EUR</li>
    <li onClick={()=>{setMoney('FJD')}}>FJD</li>
    <li onClick={()=>{setMoney('FKP')}}>FKP</li>
    <li onClick={()=>{setMoney('GBP')}}>GBP</li>
    <li onClick={()=>{setMoney('GEL')}}>GEL</li>
    <li onClick={()=>{setMoney('GGP')}}>GGP</li>
    <li onClick={()=>{setMoney('GHS')}}>GHS</li>
    <li onClick={()=>{setMoney('GIP')}}>GIP</li>
    <li onClick={()=>{setMoney('GMD')}}>GMD</li>
    <li onClick={()=>{setMoney('CNF')}}>CNF</li>
    <li onClick={()=>{setMoney('GTQ')}}>GTQ</li>
    <li onClick={()=>{setMoney('GYD')}}>GYD</li>
    <li onClick={()=>{setMoney('HKD')}}>HKD</li>
    <li onClick={()=>{setMoney('HNL')}}>HNL</li>
    <li onClick={()=>{setMoney('HRK')}}>HRK</li>
</ul>
      </div>
</li>
    <li className="" id=""><Link
    className='link-item'
                    to="register/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  ><SolutionOutlined />註冊</Link></li>
    <li className="" id=""><Link
    className='link-item'
    to={login? "profile/": "login/"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  ><LockOutlined />{login? "個人資料" : "登入"}</Link></li>
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
    <li className="hideOnMobile one" id=""><Dropdown isOpen={dropdownOpenLan} toggle={toggleLan}>
      <DropdownToggle caret size="lg">
      <GlobalOutlined />{Lan}
      </DropdownToggle>
      <DropdownMenu style={{position:"relative", right:"150px"}}>
        <DropdownItem onClick={()=>{setLan('繁體中文')}}>繁體中文</DropdownItem>
        <DropdownItem onClick={()=>{setLan('普通話')}}>普通話</DropdownItem>
        <DropdownItem onClick={()=>{setLan('English')}}>English</DropdownItem>
      </DropdownMenu>
    </Dropdown></li>
    {/* <li className="hideOnMobile" id=""><div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Dropdown button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Link 1</a></li>
      <li><a class="dropdown-item" href="#">Link 2</a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
    </ul>
  </div></li> */}

    <li className="hideOnMobile two" id=""><Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="lg">
      <CopyrightOutlined />{money}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => {setMoney("AED")}}>AED</DropdownItem>
        <DropdownItem onClick={() => {setMoney("AFN")}}>AFN</DropdownItem>
        <DropdownItem onClick={() => {setMoney("ALL")}}>ALL</DropdownItem>
<DropdownItem onClick={() => {setMoney("AMD")}}>AMD</DropdownItem>
<DropdownItem onClick={() => {setMoney("ANG")}}>ANG</DropdownItem>
<DropdownItem onClick={() => {setMoney("AOA")}}>AOA</DropdownItem>
<DropdownItem onClick={() => {setMoney("ARS")}}>ARS</DropdownItem>
<DropdownItem onClick={() => {setMoney("AUD")}}>AUD</DropdownItem>
<DropdownItem onClick={() => {setMoney("AWG")}}>AWG</DropdownItem>
<DropdownItem onClick={() => {setMoney("AZN")}}>AZN</DropdownItem>
<DropdownItem onClick={() => {setMoney("BAM")}}>BAM</DropdownItem>
<DropdownItem onClick={() => {setMoney("BBD")}}>BBD</DropdownItem>
<DropdownItem onClick={() => {setMoney("BDT")}}>BDT</DropdownItem>
<DropdownItem onClick={() => {setMoney("BGN")}}>BGN</DropdownItem>
<DropdownItem onClick={() => {setMoney("BHD")}}>BHD</DropdownItem>
<DropdownItem onClick={() => {setMoney("BIF")}}>BIF</DropdownItem>
<DropdownItem onClick={() => {setMoney("BMD")}}>BMD</DropdownItem>
<DropdownItem onClick={() => {setMoney("BOB")}}>BOB</DropdownItem>
<DropdownItem onClick={() => {setMoney("BRL")}}>BRL</DropdownItem>
<DropdownItem onClick={() => {setMoney("BSD")}}>BSD</DropdownItem>
<DropdownItem onClick={() => {setMoney("BTC")}}>BTC</DropdownItem>
<DropdownItem onClick={() => {setMoney("BTN")}}>BTN</DropdownItem>
<DropdownItem onClick={() => {setMoney("BWP")}}>BWP</DropdownItem>
<DropdownItem onClick={() => {setMoney("BYN")}}>BYN</DropdownItem>
<DropdownItem onClick={() => {setMoney("BYR")}}>BYR</DropdownItem>
<DropdownItem onClick={() => {setMoney("BZD")}}>BZD</DropdownItem>
<DropdownItem onClick={() => {setMoney("CAD")}}>CAD</DropdownItem>
<DropdownItem onClick={() => {setMoney("CDF")}}>CDF</DropdownItem>
<DropdownItem onClick={() => {setMoney("CHF")}}>CHF</DropdownItem>
<DropdownItem onClick={() => {setMoney("CLF")}}>CLF</DropdownItem>
<DropdownItem onClick={() => {setMoney("CLP")}}>CLP</DropdownItem>
<DropdownItem onClick={() => {setMoney("CNY")}}>CNY</DropdownItem>
<DropdownItem onClick={() => {setMoney("COP")}}>COP</DropdownItem>
<DropdownItem onClick={() => {setMoney("CRC")}}>CRC</DropdownItem>
<DropdownItem onClick={() => {setMoney("CUC")}}>CUC</DropdownItem>
<DropdownItem onClick={() => {setMoney("CUP")}}>CUP</DropdownItem>
<DropdownItem onClick={() => {setMoney("CVE")}}>CVE</DropdownItem>
<DropdownItem onClick={() => {setMoney("CZK")}}>CZK</DropdownItem>
<DropdownItem onClick={() => {setMoney("DJF")}}>DJF</DropdownItem>
<DropdownItem onClick={() => {setMoney("DKK")}}>DKK</DropdownItem>
<DropdownItem onClick={() => {setMoney("DOP")}}>DOP</DropdownItem>
<DropdownItem onClick={() => {setMoney("DZD")}}>DZD</DropdownItem>
<DropdownItem onClick={() => {setMoney("EGP")}}>EGP</DropdownItem>
<DropdownItem onClick={() => {setMoney("ERN")}}>ERN</DropdownItem>
<DropdownItem onClick={() => {setMoney("ETB")}}>ETB</DropdownItem>
<DropdownItem onClick={() => {setMoney("EUR")}}>EUR</DropdownItem>
<DropdownItem onClick={() => {setMoney("FJD")}}>FJD</DropdownItem>
<DropdownItem onClick={() => {setMoney("FKP")}}>FKP</DropdownItem>
<DropdownItem onClick={() => {setMoney("GBP")}}>GBP</DropdownItem>
<DropdownItem onClick={() => {setMoney("GEL")}}>GEL</DropdownItem>
<DropdownItem onClick={() => {setMoney("GGP")}}>GGP</DropdownItem>
<DropdownItem onClick={() => {setMoney("GHS")}}>GHS</DropdownItem>
<DropdownItem onClick={() => {setMoney("GIP")}}>GIP</DropdownItem>
<DropdownItem onClick={() => {setMoney("GMD")}}>GMD</DropdownItem>
<DropdownItem onClick={() => {setMoney("CNF")}}>CNF</DropdownItem>
<DropdownItem onClick={() => {setMoney("GTQ")}}>GTQ</DropdownItem>
<DropdownItem onClick={() => {setMoney("GYD")}}>GYD</DropdownItem>
<DropdownItem onClick={() => {setMoney("HKD")}}>HKD</DropdownItem>
<DropdownItem onClick={() => {setMoney("HNL")}}>HNL</DropdownItem>
<DropdownItem onClick={() => {setMoney("HRK")}}>HRK</DropdownItem>
<DropdownItem onClick={() => {setMoney("HTG")}}>HTG</DropdownItem>
<DropdownItem onClick={() => {setMoney("HUF")}}>HUF</DropdownItem>

        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
        <DropdownItem></DropdownItem>
      </DropdownMenu>
    </Dropdown></li> 
    <li className="hideOnMobile" id="">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input 
      onChange={handleInputChange}
      value={query}/>搜尋</li>
    </ul>
<ul>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="/"
                  ><HomeOutlined />主頁</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="checkout/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  ><ShoppingCartOutlined />購物車</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
                    to="register/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  ><SolutionOutlined />註冊</Link></li>
    <li className="hideOnMobile" id=""><Link
    className='link-item'
    to={login? "profile/": "login/"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  ><LockOutlined />{login? "個人資料" : "登入"}</Link></li>
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