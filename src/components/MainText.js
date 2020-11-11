import React from 'react';

import MainImage from '../images/MainImage.svg';

const MainText = function({ windowWidth, isSongsListOpen }) {
  return (
    <div className={`text ${windowWidth <= 426 && isSongsListOpen && 'blur'}`}>
      <img src={MainImage} className="text__image" alt="Главное фото сайта"/>
    </div>
  );
}

export default MainText;
