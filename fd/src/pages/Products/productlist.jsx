import React, { useState, memo, useContext, useEffect, useMemo } from 'react';
import { allProducts } from '../../data';
import './productlist.css'
import ShowContext from '../../index';
import MultiRangeSlider from "./mutiple-range/MultiRangeSlider"
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../../component/payment/Redux/cartSlice';
import { useTranslation, Trans } from 'react-i18next';
import { addPrice } from '../../component/payment/Redux/priceSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRightOutlined, CopyrightOutlined, ArrowUpOutlined, ArrowDownOutlined, ShoppingCartOutlined, SolutionOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';
import { faEnvelope, faMagnifyingGlass, faUpLong } from '@fortawesome/free-solid-svg-icons'
const Productlist = ({ clickSearch, handleSearch, sortAscending, myinfo, result2, min, max, onChange, handleChange, result, query, handleInputChange, handleClick}) => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      
    };
    const {setSortedProducts, sortedProducts, selectedMinPrice, selectedMaxPrice, selectedPrice, minVal, setMinVal, maxVal, setMaxVal, show, setShow, setSelectedCategory, selectedCategory, setQuery} = useContext(ShowContext);
    const sortDescending = () => {
        const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
      };
    //   const sortAscending = () => {
    //     const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    //     setSortedProducts(sorted);
    //   };
     const showSidebar = () => {
        const sidebar = document.querySelector('.leftSidebar');
        sidebar.style.display = show;
        sidebar.style.width = '60vw';
        setShow("flex")
     }
    //  useEffect(() => {
    //     if (selectedCategory && selectedCategory.price) {
    //       onChange({ min: minVal, max: maxVal });
    //       setSelectedCategory({price: { min: minVal, max: maxVal } });
    //     }
    //   }, [minVal, maxVal, onChange]);
      
    const dispatch = useDispatch()
        // 定義一個狀態變數 cost，並初始化為 100
      
        // 定義一個事件處理函式，用於更新 cost 的值
        const handleSliderChange = (event) => {
            console.log(event.target.name, event.target.value);
          };
        
  return (
    <div className='product container'>
    <section className='bigScreen'>
        <div className='bigScreen-wrapper'>
                        <div className='left'>
            <h4><strong>{t("merchandise")}</strong></h4>
            <div className='search'>
<input className="type" onKeyUp={handleSearch} onChange={handleInputChange}
      value={query} placeholder={t("enter")}/>
      <FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickSearch} className='searchGlass'/>
</div>
<div className='item-hover'>
            <h5>{t("product")}</h5>
</div>
<div className='item-hover'>
        <select onChange={handleClick}>
        <option value="All">{t("outdoor")}</option>
        <option value="Electric Mobility">{t("electricMobility")}</option>
        <option value="Manual Bicycle">{t("manualBicycle")}</option>
        <option value="Accessories">{t("accessories")}</option>
      </select>
</div>


        <div className='info'>
            <h4>{t("sort")}</h4>
<select onChange={sortAscending}>
<option value="Asc" 
//sortAscending={sortAscending} 
//onClick={sortAscending}
>{t("sortbylower")}<ArrowUpOutlined /></option>
<option value="Desc"
//sortDescending={sortDescending} 
//onClick={sortDescending}
>{t("sortbyhigher")}<ArrowDownOutlined /></option>
</select>
<div className='range'>
      <h4>{t("priceRange")}</h4>
      <MultiRangeSlider
      min={0}
      max={10000}
      handleChange={handleChange}
     //result={result} handleClick={handleClick} handleInputChange={handleInputChange}
     //onChange={onChange}
     onChange={({ min, max }) => {}}
    />
    </div>
        </div>
</div>

        <div className='right'>
{(selectedCategory) && <div className='productGroup'> {myinfo} </div> }
        </div>
        </div>

    </section>

    <section className='smallScreen'> 
<div className='info'>
<select onChange={sortAscending}>
<option value="Asc">{t("sortbylower")}</option>
    <option value="Desc">{t("sortbyhigher")}</option>
</select>
<div>
<select 
 onClick={showSidebar}
//  onBlur={hideSidebar}
>
<option >{t("outdoor")}</option>

</select>
<div className='search'>
<input className='type' onChange={handleInputChange}
onKeyUp={handleSearch}
      value={query} placeholder={t("enter")}/>
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={clickSearch} className='searchGlass'/>
      </div>
</div>
</div>

{(selectedCategory) && <div className='productGroup'> {myinfo} </div> }

    </section>

    {/* <section className="map">
        <div className='mapContent'>
    <iframe 
    className='left'
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14758.21467974787!2d114.12079453468321!3d22.370475715608812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2shk!4v1706617984177!5m2!1szh-TW!2shk" 
     style={{border:0}} allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className='right'>
    <div>
        <h5>{t("companyName")}</h5>
        <h5>{t("location1")}</h5>
    </div>
    <div>
        <h5>{t("shopName")}</h5>
        <p>{t("experienceStore")}</p>
        <h5>{t("path")}</h5>
        <p>https://www.youtube.com/watch?v=g7zC_LYk2Xo</p>
    </div>
    <div>
        <p>{t("officeHours1")}</p>
        <p>{t("officeHours2")}</p>
        <p>{t("vocation")}</p>
    </div>
    <div>
        <p>Whatsapp/ Signal : 55967646</p>
        <p>Email : 11boyscooter@gmail.com</p>
        <p>{t("distribution")}<br />{t("distributionRule")}</p>
        <p>{t("target")}</p>
        <p>If you need English speaking customer support, please contact us at M#55967646</p>
    </div></div></div>
    </section> */}

    </div>
  )
}

export default Productlist