import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase.ts'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
