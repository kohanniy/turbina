import React from 'react';

import logo from '../images/logo.svg';
import { CSSTransition } from 'react-transition-group'

const Header = function() {
  const [isLinksShow, setIsLinksShow] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isButtonClick, setIsButtonClick] = React.useState(false);

  const handleDropDownBtnClick = function() {
    setIsLinksShow(!isLinksShow);
    setIsButtonClick(!isButtonClick);
  };

  const resizeWindow = function() {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 426 && isLinksShow) {
      setIsLinksShow(!isLinksShow);
      setIsButtonClick(!isButtonClick);
    }
  };

  React.useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  });

  return (
    <div className="header">
      <a href="https://localhost:3000" className="header__logo-link">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </a>
      <div className="header__dropdown">
        <button className={`header__dropdown-btn ${isButtonClick ? 'header__dropdown-btn_hide-links' : 'header__dropdown-btn_show-links'}`} onClick={handleDropDownBtnClick}>
          <span>Стриминги</span>
        </button>
        <CSSTransition in={isButtonClick} timeout={400} classNames="header__links-animation" unmountOnExit={true} mountOnEnter={true}>
          <div className={`header__links`} >
            <a href="https://localhost:3000" className="header__link">Яндекс.Музыка ↗</a>
            <a href="https://localhost:3000" className="header__link">Spotify ↗</a>
            <a href="https://localhost:3000" className="header__link">Apple Music ↗</a>
            <a href="https://localhost:3000" className="header__link">VK Music ↗</a>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Header;
