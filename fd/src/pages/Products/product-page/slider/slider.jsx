import React, { useState, useContext } from 'react'
import ShowContext from '../../../../index'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { allProducts } from '../../../../data';
import "./slider.css"
class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.slider1 = React.createRef();
    this.slider2 = React.createRef();
  }
  
  handleSlider1Change = (oldIndex, newIndex) => {
    if (this.slider2.current) {
      this.slider2.current.slickGoTo(newIndex);
    }
  };
  
  handleSlider2Change = (oldIndex, newIndex) => {
    if (this.slider1.current) {
      this.slider1.current.slickGoTo(newIndex);
    }
  };
  
  render() {
    const settingsFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      beforeChange: this.handleSlider1Change
    };

    const settingsNav = {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      beforeChange: this.handleSlider2Change
    };


    return (
      <ShowContext.Consumer>
        {({ index}) => (
          <div>
            <Slider ref={this.slider1} {...settingsFor}>
              <img src={allProducts.All[index-1].img1} alt="" />
              <img src={allProducts.All[index-1].img2} alt="" />
            
            </Slider>
            <Slider ref={this.slider2} {...settingsNav}>
              <img src={allProducts.All[index-1].img1} alt="" />
              <img src={allProducts.All[index-1].img2} alt="" />
  
            </Slider>
          </div>
        )}
      </ShowContext.Consumer>
    );
  }
}

export default SliderComponent;