import React from 'react';

import logo from '../images/logo.svg';
import './header.css';

const Header = function() {
  return (
    <div className="header">
      <img src={logo} alt="Логотип" className="header__logo"/>
      <div className="header__links">
        <a href="#" className="header__link">Яндекс.Музыка ↗</a>
        <a href="#" className="header__link">Spotify ↗</a>
        <a href="#" className="header__link">Apple Music ↗</a>
        <a href="#" className="header__link">VK Music ↗</a>
      </div>
    </div>
  );
}

export default Header;
