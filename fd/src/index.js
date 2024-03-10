import React, { createContext } from 'react';
import { Provider, useDispatch } from "react-redux";
import store from '../src/component/payment/Redux/store.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './aa copy.jsx';
import reportWebVitals from './reportWebVitals';
const ShowContext = createContext();
export default ShowContext;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
