import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Main from './components/Main';
import Player from './components/Player'

ReactDOM.render(
  <React.StrictMode>
     { /* Вставьте сюда ваш блок, который вы верстаете */ }
     <Header />
     <Main />
     <Player />
  </React.StrictMode>,
  document.getElementById('root')
);
