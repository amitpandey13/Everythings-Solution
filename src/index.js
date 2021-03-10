import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import loginUtils from './loginUtils';
import Login from './login';

window.onload=loginUtils;

ReactDOM.render(
     <Login />
 
  ,
  document.getElementById('root')
);


