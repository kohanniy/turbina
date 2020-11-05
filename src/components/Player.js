import React from 'react'

import playImage from '../images/Play.svg'
import pauseImage from '../images/Pause.svg'
import moreImage from '../images/more.svg'
import closeMoreImage from '../images/closemore.svg'

import grandson from '../music.mp3'
import { CSSTransition } from 'react-transition-group';

import Songs from './Songs'

const songs = [{
  title: 'Blood // Water - Grandson',
  song: grandson,
  songText: 'We\'ll never get free\n Lamb to the slaughter\n What you gon\' do\n When there\'s blood in the water\n The price of your greed\n' +
    'Is your son and your daughter\n What you gon\' do\n When there\'s blood in the water\n \n Look me in my eyes\n' +
    'Tell me everything\'s not fine\n Or the people ain\'t happy\n And the river has run dry\n You thought you could go free\n' +
    'But the system is done for\n If you listen here closely\n There\'s a knock at your front door\n \n We\'ll never get free\n' +
    'Lamb to the slaughter\n What you gon\' do\n When there\'s blood in the water\n The price of your greed\n Is your son and your daughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n When there\'s blood in the\n When there\'s blood in the\n' +
    '\n Beg me for mercy\n Admit you were toxic\n You poisoned me just for\n Another dollar in your pocket\n Now I am the violence\n' +
    'I am the sickness\n Won\'t accept your silence\n Beg me for forgiveness\n \n We\'ll never get free\n Lamb to the slaughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n The price of your greed\n Is your son and your daughter\n' +
    'What you gon\' do\n When there\'s blood in the water\n When there\'s blood in the water\n When there\'s blood in the\n' +
    '\n I am the people\n I am the storm\n I am the riot\n I am the swarm\n When the last tree\'s fallen\n The animal can\'t hide\n' +
    'Money won\'t solve it\n What\'s your alibi?\n What\'s your alibi?\n What\'s your alibi?\n' +
    '\n What you gon\' do when there\'s blood in the, blood in the water?\n When there\'s blood in the water\n' +
    'When there\'s blood in the\n When there\'s blood in the water\n'
}, {}]

const Player = function() {
  // Audio
  const [audioFile, setAudioFile] = React.useState(new Audio(songs[0].song));
  const [playing, setPlaying] = React.useState(false);
  const [currentMinutes, setCurrentMinutes] = React.useState(0);
  const [currentSeconds, setCurrentSeconds] = React.useState(0);
  const [currentSong, setCurrentSong] = React.useState(songs[0]);


  // Player.js
  const [moreSectionOpened, openMoreSection] = React.useState(false);
  const [songsActive, setSongsActive] = React.useState(false);
  const [isReleasesActive, setReleasesActive] = React.useState(false);

  const handleMoreClick = function(e) {
    openMoreSection(!moreSectionOpened);
  }

  const handleSwitchClick = function(e) {
    setReleasesActive(!isReleasesActive);
    checkWindowWidth();
  }

  React.useEffect(() => {
    audioFile.addEventListener('timeupdate', handleSongTimeUpdate);
  }   );

  const handlePlayClick = function(e) {
    if (playing) {
      audioFile.pause();
      setPlaying(false);
    } else {
      audioFile.play();
      setPlaying(true);
    }
  }

  const handleSongTimeUpdate = function(e) {
    const minutes = Math.floor(audioFile.currentTime / 60);
    const seconds = Math.floor(audioFile.currentTime % 60);

    minutes < 10 ? setCurrentMinutes(`0${minutes}`) : setCurrentMinutes(minutes);
    seconds < 10 ? setCurrentSeconds(`0${seconds}`) : setCurrentSeconds(seconds);
    changeProgressFill(document.querySelector('.player__timeline'));
  }

  const handleTimelineChange = function(e) {
    audioFile.currentTime = e.target.value
  }

  const handleTimelineInput = function(e) {
    changeProgressFill(e.target)
  }

  const changeProgressFill = function(target) {
    target.style.background = `linear-gradient(to right, white 0%, white ${(target.value - target.min) / (target.max - target.min) * 100}%, rgba(255, 255, 255, .3) ${(target.value - target.min) / (target.max - target.min) * 100}%, rgba(255, 255, 255, .3) 100%)`
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

  return (
    <>
      <div className={`player ${songsActive ? 'player__songs_active' : ''}`}>
        {playing ? <img onClick={handlePlayClick} className="player__play-button" src={pauseImage} alt="Пауза" /> :
          <img onClick={handlePlayClick} className="player__play-button" src={playImage} alt="Воспроизведение" />}
        <div className="player__info">
          <div className="player__song-title">
            <p className="player__song-title_disactive">{ currentSong.title }</p>
          </div>
          <span className="player__time">{currentSeconds ? `${currentMinutes}:${currentSeconds}` : '00:00'}</span>
        </div>
        <input onInput={handleTimelineInput} onChange={handleTimelineChange} className="player__timeline" type="range"
               name="time" min="0" max={Math.floor(audioFile.duration).toString()} value={audioFile.currentTime} />
        <CSSTransition in={moreSectionOpened} timeout={200} classNames="player__switch" unmountOnExit={true} mountOnEnter={true}>
          <button onClick={handleSwitchClick} className="player__switch-button">{isReleasesActive ? 'Текст песни' : 'Релизы'}</button>
        </CSSTransition>
        <img alt="Подробнее" src={moreSectionOpened ? closeMoreImage : moreImage} className="player__more-button"
             onClick={handleMoreClick} />
        <CSSTransition in={moreSectionOpened} timeout={200} classNames="songs-animation" unmountOnExit={true} mountOnEnter={true} onEnter={(e) => setSongsActive(true)} onExit={(e) => setSongsActive(false)}>
          <Songs song={currentSong.songText.split('\n')} isReleasesActive={isReleasesActive} />
        </CSSTransition>
      </div>
    </>
  )
}

export default Player
