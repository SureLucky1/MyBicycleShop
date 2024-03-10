import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  CLEAR_ERRORS,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  MY_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_FAIL,
  ALL_ORDERS_SUCCESS,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
} from "../constants/orderConstant";
import axios from "axios";


// 定義一個名為 createOrder 的異步函數，該函數接受一個訂單作為參數
export const createOrder = (order) => async (dispatch) => {
  try {
    // 發送一個名為 CREATE_ORDER_REQUEST 的 action
    dispatch({ type: CREATE_ORDER_REQUEST });

    // 定義一個配置對象，該對象包含一個 headers 屬性，該屬性用於設置請求的內容類型為 JSON
    const config = { headers: { "Content-Type": "application/json" } };

    // 使用 axios 發送一個 POST 請求到 "/api/v1/order/new"，並將訂單和配置對象作為參數傳遞
    // 然後等待請求的結果，並將結果的 data 屬性解構出來
    const { data } = await axios.post("/api/v1/order/new", order, config);

    // 發送一個名為 CREATE_ORDER_SUCCESS 的 action，並將 data 作為 payload 傳遞
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    // 如果在上述過程中出現錯誤，則發送一個名為 CREATE_ORDER_FAIL 的 action，並將錯誤消息作為 payload 傳遞
    dispatch({ type: CREATE_ORDER_FAIL, payload: error.message });
  }
};


// get all orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDER_REQUEST });

    const { data } = await axios.get("/api/v1/orders/myOrders");

    dispatch({ type: MY_ORDER_SUCCESS, payload: data.userOrders });
  } catch (error) {
    dispatch({ type: MY_ORDER_FAIL, payload: error.message });
  }
};

// get single order

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/orders`);

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({ type: ALL_ORDERS_FAIL, payload: error.message });
  }
};


// delet Order --> admin
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAIL, payload: error.message });
  }
};

// update order --> admin (status update) 
export const updateOrder = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      productData,
      config
    );
    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: UPDATE_ORDER_FAIL, payload: error.message });
  }
};

// clear errors

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
