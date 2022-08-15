import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle";
import MyRouter from './component/MyRouter';
import Dmart from './reduxStore/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Dmart}>
    <MyRouter />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
