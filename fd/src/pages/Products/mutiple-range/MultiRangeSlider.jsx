import React, { useContext, useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";
import ShowContext from "../../../index";
const MultiRangeSlider = ({ 
  min, 
  max, 
  onChange, 
 handleInputChange, handleClick }) => {
 const [minVal, setMinVal] = useState(min);
 const [maxVal, setMaxVal] = useState(max);
  const {selectedPrice, 
    setSelectedPrice, 
    selectedCategory, setSelectedCategory, setQuery} = useContext(ShowContext)
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (selectedCategory || selectedPrice) {
      onChange({ min: minVal, max: maxVal });
      //setSelectedMinPrice(minVal.toString());
      //setSelectedMaxPrice(maxVal.toString());
      setSelectedPrice({price:{ min: minVal, max: maxVal }});
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div className="rangetype">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        //handleChange={handleChange}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          
          //setSelectedCategory(event.target.value);
          minValRef.current = value;
        }}
        //handleminChange={ handleminChange}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        //handleChange={handleChange}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          
          //setSelectedCategory(event.target.value);
          maxValRef.current = value;
        }}
        //handlemaxChange={ handlemaxChange}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        {/* <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div> */}
        <label className="value" htmlFor="value">HKD ${minVal} - ${maxVal} </label>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
