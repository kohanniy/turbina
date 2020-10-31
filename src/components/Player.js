import React from 'react';

import playImage from '../images/Play.svg';
import pauseImage from '../images/Pause.svg';

const Player = function() {
  const [isPaused, setPaused] = React.useState(false);

  return (
    <div className="player">
      {isPaused ? <img className="player__button" src={pauseImage} alt="Пауза"/> : <img className="player__button" src={playImage} alt="Воспроизведение"/>}
    </div>
  );
}

export default Player;
