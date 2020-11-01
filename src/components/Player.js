import React from 'react'

import playImage from '../images/Play.svg'
import pauseImage from '../images/Pause.svg'
import moreImage from '../images/more.svg'
import closeMoreImage from '../images/closemore.svg'

import './player.css'
import Songs from './Songs'

const Player = function() {
  const [isPaused, setPaused] = React.useState(false);
  const [currentSong, setSong] = React.useState({});
  const [isOpenedSongList, setOpenedSongList] = React.useState(false);
  const [isDisabledSongList, setDisabledSongList] = React.useState(true); // Создано для фикса резкого закрытия списка песен

  const handleMoreClick = function(e) {
    if(isOpenedSongList) {
      setOpenedSongList(!isOpenedSongList);
      setTimeout(function() {
        setDisabledSongList(true)
      }, 300);
    } else {
      setDisabledSongList(false);
      setOpenedSongList(!isOpenedSongList);
    }
  }

  return (
    <>
      <div className={`player ${isOpenedSongList ? 'player__songs_active' : ''}`}>
        {isPaused ? <img className="player__button" src={pauseImage} alt="Пауза" /> :
          <img className="player__button" src={playImage} alt="Воспроизведение" />}
        <div className="player__info">
          <p className="player__song-title">Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров</p>
          <span className="player__time">0:24</span>
        </div>
        <div className="player__timeline" />
        <img alt="Подробнее" src={isOpenedSongList ? closeMoreImage : moreImage} className="player__more-button" onClick={handleMoreClick}/>
      </div>
      <Songs isOpened={isOpenedSongList} isDisabled={isDisabledSongList}/>
    </>
  )
}

export default Player