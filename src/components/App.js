import React from 'react';
import SectionsWrapper from './SectionsWrapper';
import Header from './Header';
import MainText from './MainText';
import Player from './Player';
import Footer from './Footer';

const App = function() {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isButtonClick, setIsButtonClick] = React.useState(false);
  const [ isSongsListOpen, setIsSongsListOpen ] = React.useState(false);

  const handleMoreButtonClick = function() {
    setIsSongsListOpen(!isSongsListOpen);
  }

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
    <>
      <div className="page__main">
        <Header
          windowWidth={windowWidth}
          isButtonClick={isButtonClick}
          handleDropDownBtnClick={handleDropDownBtnClick}
          isSongsListOpen={isSongsListOpen}
        />
        <MainText
          windowWidth={windowWidth}
          isSongsListOpen={isSongsListOpen}
        />
        <Player
          handleMoreButtonClick={handleMoreButtonClick}
          isSongsListOpen={isSongsListOpen}
        />
      </div>
      <SectionsWrapper />
      <Footer />
    </>
  );
}

export default App;
