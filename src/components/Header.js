import React from 'react';

import logo from '../images/logo.svg';
import { CSSTransition } from 'react-transition-group'
import cn from 'classnames'
import { data } from '../data/data'

const Header = function() {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isButtonClick, setIsButtonClick] = React.useState(false);

  const handleDropDownBtnClick = function() {
    setIsButtonClick(!isButtonClick);
  };

  React.useEffect(() => {
    const resizeWindow = function() {
      setWindowWidth(window.innerWidth);

      if (windowWidth > 426 && isButtonClick) {
        setIsButtonClick(!isButtonClick);
      }
    };

    resizeWindow();

    window.addEventListener('resize', resizeWindow);

    return () => window.removeEventListener('resize', resizeWindow);
  }, [windowWidth, isButtonClick]);

  return (
    <div className="header">
      <a href="https://localhost:3000" className="header__logo-link">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </a>
      {
        windowWidth > 426 ?
          <div className="header__links">
            {data.mainData.linksData.map(linkData =>
              <a href={linkData.link} key={linkData.link} target="_blanc" className="header__link">{linkData.linkText}</a>
            )}
          </div>
        :
          <div className="header__dropdown">
            <button className={cn("header__dropdown-btn", {
              "header__dropdown-btn_hide-links": isButtonClick,
              "header__dropdown-btn_show-links": !isButtonClick
            })} onClick={handleDropDownBtnClick}>
              <span>Стриминги</span>
            </button>
            <CSSTransition in={isButtonClick} timeout={400} classNames="header__links-animation" unmountOnExit={true} mountOnEnter={true}>
              <div className="header__links header__links_mobile">
                {data.mainData.linksData.map((linkData) =>
                  <a href={linkData.link} key={linkData.link} target="_blanc" className="header__link">{linkData.linkText}</a>
                )}
              </div>
            </CSSTransition>
          </div>
      }
    </div>
  );
}

export default Header;
