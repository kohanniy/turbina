import React from 'react';

import MainImage from '../images/MainImage.svg';

import './maintext.css';

const MainText = function() {
  return (
    <div className="text">
      <img src={MainImage} className="text__image" alt="Главное фото сайта"/>
    </div>
  );
}

export default MainText;
