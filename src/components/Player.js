import React from 'react'

import playImage from '../images/Play.svg'
import pauseImage from '../images/Pause.svg'
import moreImage from '../images/more.svg'
import closeMoreImage from '../images/closemore.svg'
import { initialSongs } from '../data/data'
import throttling from '../utils/throttling'
import convertSecToMin from '../utils/convertSecToMin'

import { CSSTransition } from 'react-transition-group';

import Songs from './Songs'


const Player = function({ handleMoreButtonClick, isSongsListOpen }) {
  //Audio
  const [ currentSong, setCurrentSong ] = React.useState(initialSongs[0]);
  const [ currentTime, setCurrentTime ] = React.useState(0);
  const [ duration, setDuration ] = React.useState(0);
  const [ isPlaying, setIsPlaying ] = React.useState(false);

  // Player.js
  const [songsActive, setSongsActive] = React.useState(false);
  const [isReleasesActive, setReleasesActive] = React.useState(false);

  const myPlayer = React.useRef(null);

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const handlePlayClick = function(e) {
    if (isPlaying) {
      myPlayer.current.pause();
      setIsPlaying(false);
    } else {
      myPlayer.current.play();
      setIsPlaying(true);
    }
  }

  const onSongClick = function(songData) {
    setCurrentSong(songData);
  }

  const handleTimeLineClick = function(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width * 100;
    const timeToGo = duration / 100 * percentage;
    myPlayer.current.currentTime = timeToGo;
  }

  const checkWindowWidth = function() {
    const container = document.querySelector('.player__song-title');
    const text = document.querySelector('.player__song-title_disactive');
    const songsList = document.querySelectorAll('.song__title');
    const songsContainer = document.querySelector('.songs__list');
    if (container.offsetWidth <= text.offsetWidth) {
      text.className = 'player__song-title_disactive player__song-title_active';
    } else {
      text.className = 'player__song-title_disactive'
    }
    songsList.forEach((song) => {
      if (song.offsetWidth >= songsContainer.offsetWidth) {
        song.className = 'song__title song__title_active'
      } else {
        song.className = 'song__title'
      }
    })
  }

  React.useEffect(() => {
    const container = document.querySelector('.player__song-title');
    const text = document.querySelector('.player__song-title_disactive');
    const songsList = document.querySelectorAll('.song__title');
    const songsContainer = document.querySelector('.songs__list');
    if (container.offsetWidth <= text.offsetWidth) {
      text.className = 'player__song-title_disactive player__song-title_active';
    } else {
      text.className = 'player__song-title_disactive';
    }
    songsList.forEach((song) => {
      if (song.offsetWidth >= songsContainer.offsetWidth) {
        song.className = 'song__title song__title_active'
      } else {
        song.className = 'song__title'
      }
    })
  })

  window.addEventListener('resize', checkWindowWidth);

  const handleSwitchClick = function(e) {
    setReleasesActive(!isReleasesActive);
    checkWindowWidth();
  }

  return (
    currentSong.link ?
      <div className={`player ${songsActive ? 'player__songs_active' : ''}`}>
        {isPlaying ?
            <img onClick={handlePlayClick} className="player__play-button" src={pauseImage} alt="Пауза" />
          :
            <img onClick={handlePlayClick} className="player__play-button" src={playImage} alt="Воспроизведение" />}
        <div className="player__info">
          <div className="player__song-title">
            <p className="player__song-title_disactive">{`${currentSong.title} — ${currentSong.originalAuthor} feat ${currentSong.author}`}</p>
          </div>
          <span className="player__time">{convertSecToMin(duration - currentTime)}</span>
        </div>
        <div className="player__timeline" onClick={handleTimeLineClick}>
          <div className="player__timeline-bar" style={{width: `${currentTime / duration * 100}%`}} />
        </div>
        <audio
          style={{display: 'none'}}
          src={currentSong.song}
          onTimeUpdate={onTimeUpdate}
          ref={myPlayer}
          onLoadedData={() => {
            setDuration(myPlayer.current.duration);
            isPlaying && myPlayer.current.play();
          }}
          onEnded={() => {
            setIsPlaying(false);
          }}
        >
          Ваш бразуер не поддерживает аудио
        </audio>
        <CSSTransition in={isSongsListOpen} timeout={200} classNames="player__switch" unmountOnExit={true} mountOnEnter={true}>
          <img className="player__song-cover" src={currentSong.cover} alt="Обложка песни" />
        </CSSTransition>
        <CSSTransition in={isSongsListOpen} timeout={200} classNames="player__switch" unmountOnExit={true} mountOnEnter={true}>
          <div className="player__buttons-wrapper">
            <a href={currentSong.link} target="_blanc" className="player__clip-link">Клип</a>
            <button onClick={handleSwitchClick} className="player__switch-button">{!isReleasesActive ? 'Текст песни' : 'Релизы'}</button>
          </div>
        </CSSTransition>
        <img
        alt="Подробнее"
        src={isSongsListOpen ? closeMoreImage : moreImage}
        className="player__more-button"
        onClick={handleMoreButtonClick}
        />
        <CSSTransition in={isSongsListOpen} timeout={200} classNames="songs-animation" unmountOnExit={true} mountOnEnter={true} onEnter={(e) => setSongsActive(true)} onExit={(e) => setSongsActive(false)}>
          <Songs
            onSongClick={onSongClick}
            songs={initialSongs}
            song={currentSong.text.split('\n')}
            isReleasesActive={isReleasesActive}
          />
        </CSSTransition>
      </div>
    :
      <div className={`player ${songsActive ? 'player__songs_active' : ''}`}>
        {isPlaying ?
            <img onClick={handlePlayClick} className="player__play-button" src={pauseImage} alt="Пауза" />
          :
            <img onClick={handlePlayClick} className="player__play-button" src={playImage} alt="Воспроизведение" />}
        <div className="player__info">
          <div className="player__song-title">
            <p className="player__song-title_disactive">{`${currentSong.title} — ${currentSong.originalAuthor} feat ${currentSong.author}`}</p>
          </div>
          <span className="player__time">{convertSecToMin(duration - currentTime)}</span>
        </div>
        <div className="player__timeline" onClick={handleTimeLineClick}>
          <div className="player__timeline-bar" style={{width: `${currentTime / duration * 100}%`}} />
        </div>
        <audio
          style={{display: 'none'}}
          src={currentSong.song}
          onTimeUpdate={onTimeUpdate}
          ref={myPlayer}
          onLoadedData={() => {
            setDuration(myPlayer.current.duration);
            isPlaying && myPlayer.current.play();
          }}
          onEnded={() => {
            setIsPlaying(false);
          }}
        >
          Ваш бразуер не поддерживает аудио
        </audio>
        <CSSTransition in={isSongsListOpen} timeout={200} classNames="player__switch" unmountOnExit={true} mountOnEnter={true}>
          <img className="player__song-cover" src={currentSong.cover} alt="Обложка песни" />
        </CSSTransition>
        <CSSTransition in={isSongsListOpen} timeout={200} classNames="player__switch" unmountOnExit={true} mountOnEnter={true}>
          <button onClick={handleSwitchClick} className="player__switch-button">{!isReleasesActive ? 'Текст песни' : 'Релизы'}</button>
        </CSSTransition>
        <img
        alt="Подробнее"
        src={isSongsListOpen ? closeMoreImage : moreImage}
        className="player__more-button"
        onClick={handleMoreButtonClick}
        />
        <CSSTransition in={isSongsListOpen} timeout={200} classNames="songs-animation" unmountOnExit={true} mountOnEnter={true} onEnter={(e) => setSongsActive(true)} onExit={(e) => setSongsActive(false)}>
          <Songs
            onSongClick={onSongClick}
            songs={initialSongs}
            song={currentSong.text.split('\n')}
            isReleasesActive={isReleasesActive}
          />
        </CSSTransition>
      </div>
  );
}

export default Player
