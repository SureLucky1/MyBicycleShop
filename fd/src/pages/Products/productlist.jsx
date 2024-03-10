import React, { useState, memo, useContext, useEffect, useMemo } from 'react';
import { allProducts } from '../../data';
import './productlist.css'
import ShowContext from '../../index';
import MultiRangeSlider from "./mutiple-range/MultiRangeSlider"
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../../component/payment/Redux/cartSlice';
import { addPrice } from '../../component/payment/Redux/priceSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowRightOutlined, CopyrightOutlined, ArrowUpOutlined, ArrowDownOutlined, ShoppingCartOutlined, SolutionOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';
import { faEnvelope, faMagnifyingGlass, faUpLong } from '@fortawesome/free-solid-svg-icons'
const Productlist = ({myinfo, sortAscending, result2, min, max, onChange, handleChange, result, query, handleInputChange, handleClick}) => {


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
            <h4><strong>商品</strong></h4>
            <div className='search'>
<input className="type" onChange={handleInputChange}
      value={query} placeholder='輸入關鍵字/商品編號'/>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchGlass'/>
</div>
<div className='item-hover'>
            <h5>全部商品</h5>
</div>
<div className='item-hover'>
        <select onChange={handleClick}>
        <option value="All">戶外運動 Outdoor</option>
        <option value="Electric Mobility">電動可移動工具 Electric Mobility</option>
        <option value="Manual Bicycle">人力滑板車, 單車 Manual Bicycle</option>
        <option value="Accessories">配件類 Accessories</option>
      </select>
</div>


        <div className='info'>
            <h4>排序</h4>
<select onChange={sortAscending}>
<option value="Asc" 
//sortAscending={sortAscending} 
//onClick={sortAscending}
>以較低價錢優先排序<ArrowUpOutlined /></option>
<option value="Desc"
//sortDescending={sortDescending} 
//onClick={sortDescending}
>以較高價錢優先排序<ArrowDownOutlined /></option>
</select>
<div className='range'>
      <h4>價格範圍</h4>
      <MultiRangeSlider
      min={0}
      max={10000}
      handleChange={handleChange}
     //result={result} handleClick={handleClick} handleInputChange={handleInputChange}
     //onChange={onChange}
     onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
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
<option value="Asc" >以較低價錢優先排序</option>
<option value="Desc">以較高價錢優先排序</option>
</select>
<div>
<select 
 onClick={showSidebar}
//  onBlur={hideSidebar}
>
<option >戶外運動 Outdoor</option>

</select>
<div className='search'>
<input className='type' onChange={handleInputChange}
      value={query} placeholder='輸入關鍵字/商品編號'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchGlass'/>
      </div>
</div>
</div>

{(selectedCategory) && <div className='productGroup'> {myinfo} </div> }

    </section>

    <section className="map">
        <div className='mapContent'>
    <iframe 
    className='left'
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14758.21467974787!2d114.12079453468321!3d22.370475715608812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2shk!4v1706617984177!5m2!1szh-TW!2shk" 
     style={{border:0}} allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className='right'>
    <div>
        <h5>華華科技代步研發有限公司</h5>
        <h5>地址 : 金門高華工業大廈</h5>
    </div>
    <div>
        <h5>眾樂樂單車店</h5>
        <p>智能車體驗店 (暫設零售點) : 金門開心路101芯海1/F（御龍村金門河畔單車徑旁）</p>
        <h5>教你走 : </h5>
        <p>https://www.youtube.com/watch?v=g7zC_LYk2Xo</p>
    </div>
    <div>
        <p>星期一至五1300~1800 (可預約到1900)</p>
        <p>星期六日及假期1200~1800 (可預約到1900)</p>
        <p>星期四放假</p>
    </div>
    <div>
        <p>Whatsapp/ Signal : 55967646</p>
        <p>Email : 11boyscooter@gmail.com</p>
        <p>分銷渠道：各大電器連鎖店、主流體育用品店、大型網店、3C數碼店、汽車/摩托車店、汽車用品/服務店、電腦商店、單車店等。<br />(為分銷順利進行，按商店性質和地點分配，以上措施優先安排早加入者。)</p>
        <p>發展目標 : 計劃兩年內進入全面分銷模式</p>
        <p>If you need English speaking customer support, please contact us at M#55967646</p>
    </div></div></div>
    </section>

    </div>
  )
}

export default Productlist