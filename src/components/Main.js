import React from 'react';

import MainImage from '../images/MainImage.svg';

import './main.css';

const Main = function() {
  return (
    <div className="main">
      <img src={MainImage} className="main__image" alt="Главное фото сайта"/>
    </div>
  );
}

export default Main;
