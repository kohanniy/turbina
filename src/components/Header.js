import React from 'react';

import logo from '../images/logo.svg';
import './header.css';

const Header = function() {
  return (
    <div className="header">
      <a href="https://localhost:3000" className="header__logo-link">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </a>
      <div className="header__links">
        <a href="https://localhost:3000" className="header__link">Яндекс.Музыка ↗</a>
        <a href="https://localhost:3000" className="header__link">Spotify ↗</a>
        <a href="https://localhost:3000" className="header__link">Apple Music ↗</a>
        <a href="https://localhost:3000" className="header__link">VK Music ↗</a>
      </div>
    </div>
  );
}

export default Header;
