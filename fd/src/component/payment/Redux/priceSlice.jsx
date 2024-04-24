// import { createSlice } from "@reduxjs/toolkit";
// import React, {useContext, useEffect, useState} from "react";
// import { moneyData, allProducts } from "../../../data";
// import ShowContext from "../../..";

// const initialTotal = parseFloat(localStorage.getItem("totalValue")) || 0;

// let initialState = {
//   currency: 1,
//   quantity:0,
//   total: initialTotal,
// };

// const priceSlice = createSlice({
//   name: "price",
//   initialState,
//   reducers: {
//     addPrice: (state, action) => {
//       const { productId} = action.payload;
//       console.log(action.payload)
//       console.log(state.currency)
//       console.log(allProducts.All[productId].price * state.currency)
//       return {
//         ...state,
//         total: state.total + Math.floor(Number.parseFloat((Number(allProducts.All[productId - 1].price ) * (state.quantity +1))* state.currency)) ,
//       };
//     },
//     subtractPrice: (state, action) => {
//       const { productId} = action.payload;
//       return {
//         ...state,
//         total: state.total - Math.floor(Number.parseFloat((Number(allProducts.All[productId - 1].price )* (state.quantity +1))* state.currency )) ,
//       };
//     },
//     clearTotal: (state) => {
//       return {
//         ...state,
//         total: 0,
//       };
//     },
//     setCurrency: (state, action) => {
//       return {
//         ...state,
//         currency: action.payload,
//       };
//     },
//   },
// });

// export default priceSlice.reducer;
// export const { addPrice, subtractPrice, clearTotal, setCurrency } = priceSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import React, {useContext, useEffect, useState} from "react";
import { moneyData, allChProducts } from "../../../data";
import ShowContext from "../../..";

const initialTotal = parseFloat(localStorage.getItem("totalValue")) || 0;

let initialState = {
  currency: 1,
  quantity:0,
  total: initialTotal,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    addPrice: (state, action) => {
      const { productId} = action.payload;
      return {
        ...state,
        total: state.total + Number.parseFloat(Math.floor((Number(allChProducts.All[productId - 1].price ) * state.currency))* (state.quantity +1)) ,
      };
    },
    subtractPrice: (state, action) => {
      const { productId} = action.payload;
      return {
        ...state,
        total: state.total - Number.parseFloat(Math.floor((Number(allChProducts.All[productId - 1].price )* state.currency))*  (state.quantity +1)) ,
      };
    },
    clearTotal: (state) => {
      return {
        ...state,
        total: 0,
      };
    },
    setCurrency: (state, action) => {
      return {
        ...state,
        currency: action.payload,
        // 當匯率變化時，重新計算總價
        total: state.total * action.payload,
      };
    },
  },
});

export default priceSlice.reducer;
export const { addPrice, subtractPrice, clearTotal, setCurrency } = priceSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const priceSlice = createSlice({
//   name: "price",
//   initialState: { total: 0, cart: [] },
//   reducers: {
//     addPrice: (state, action) => {
//       // 檢查產品是否已經在購物車中
//       let existingProduct = state.cart.find(item => item.title === action.payload.title);
//       if (!existingProduct) {
//         // 如果產品不在購物車中，則添加到購物車並更新總額
//         state.cart.push(action.payload);
//         state.total += Number.parseFloat(action.payload.price);
//       }else{
//         alert("The same product has been in your shopping cart.")
//       }
//     },
//     subtractPrice: (state, action) => {
//       let existingProduct = state.cart.find(item => item.title === action.payload.title);
//       if (existingProduct) {
//         // 如果產品在購物車中，則從購物車中移除並更新總額
//         state.cart = state.cart.filter(item => item.title !== action.payload.title);
//         state.total -= Number.parseFloat(action.payload.price);
//       }
//     },
//     clearTotal: (state) => {
//       state.total = 0;
//       state.cart = [];
//     },
//   },
// });

// export default priceSlice.reducer;
// export const { addPrice, subtractPrice, clearTotal } = priceSlice.actions;
