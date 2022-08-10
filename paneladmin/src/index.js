import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import fa from "antd/es/locale/fa_IR";
import { Provider as ReduxPropvider } from "react-redux";
import store from "./redux/store/index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider direction='rtl' locale={fa}>
  <ReduxPropvider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ReduxPropvider>
  </ConfigProvider>
   
);

