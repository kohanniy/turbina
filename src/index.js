import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import MainText from './components/MainText';
import Player from './components/Player'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <Header />
      <MainText />
      <Player />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
