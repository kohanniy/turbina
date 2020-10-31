import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
     { /* Вставьте сюда ваш блок, который вы верстаете */ }
     <Header />
     <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
