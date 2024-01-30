import React, { useEffect, useState, useContext } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyCarousel from '../carousel/carousel'
import ShowContext from '../../index';
import { allProducts } from '../../data';
import './main.css'
const Main = () => {
    const { show, setShow} = useContext(ShowContext);

        const showSidebar = () => {
        const sidebar = document.querySelector('.leftSidebar');
        sidebar.style.display = show;
        sidebar.style.width = '60vw';
        setShow("flex")
    }
  return (
    <div className='body'>
        <MyCarousel />

        <section className='bigScreen'>
            <div className='bigScreen-wrapper'>
                            <div className='left'>
                <h1>全部商品</h1>
                <select>
            <option value="asdf">戶外運動 Outdoor</option>
            <option value="asdf">電動可移動工具 Electric Mobility</option>
            <option value="asdf">人力滑板車, 單車 Manual Bicycle</option>
            <option value="asdf">配件類 Accessories</option>
          </select>
            </div>


            <div className='right'>
<div className='info'>
    <select>
    <option value="asdf">以時間排序</option>
    <option value="asdf2">以價錢排序</option>
    </select>
<div>
    <input placeholder='輸入關鍵字/商品編號'/>
</div>
</div>
<div className='productGroup'>
{allProducts.map((item) => {
    return (
        <div key={item.id} className='product'>
            <img src={item.img1} />
            <h6>{item.title}</h6>
            <p>{item.des}</p>
            <span>HKD ${item.price}</span>
        </div>
    );
})}

</div>
            </div>
            </div>

        </section>

        <section className='smallScreen'> 
<div className='info'>
    <select>
    <option value="asdf">以時間排序</option>
    <option value="asdf2">以價錢排序</option>
    </select>
<div>
<select 
onClick={showSidebar}
//  onBlur={hideSidebar}
 >
    <option >戶外運動 Outdoor</option>

    </select>
    <input placeholder='輸入關鍵字/商品編號'/>
</div>
</div>

<div className='productGroup'>
<div className='product-container'>
{allProducts.map((item)=>{
    <div key={item.id} className='product'>
        <img src={item.img1} />
        <p>{item.des}</p>
        <span>HKD {item.price}</span>
    </div>
})
    }</div>
</div>

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
            <h5>香港健騎代步科技有限公司</h5>
            <h5>地址 : 屯門怡華工業大廈</h5>
        </div>
        <div>
            <h5>壹壹滑板車</h5>
            <p>智能車體驗店 (暫設零售點) : 屯門業旺路101弦海1/F（龍逸邨屯門河畔單車徑旁）</p>
            <h5>教你點行 : </h5>
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

export default Main