import React from 'react'

import playImage from '../images/Play.svg'
import pauseImage from '../images/Pause.svg'
import moreImage from '../images/more.svg'
import closeMoreImage from '../images/closemore.svg'

import grandson from '../music.mp3'

import Songs from './Songs';

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
}, {

}];

const Player = function() {
  // Audio
  const [audioFile] = React.useState(new Audio(songs[0].song));
  const [playing, setPlaying] = React.useState(false);
  const [currentMinutes, setCurrentMinutes] = React.useState(0);
  const [currentSeconds, setCurrentSeconds] = React.useState(0);
  const [currentSong, setCurrentSong] = React.useState(songs[0]);


  // Player.js
  const [isReleasesActive, setReleasesActive] = React.useState(false);
  const [isOpenedSongList, setOpenedSongList] = React.useState(false);
  const [isDisabledSongList, setDisabledSongList] = React.useState(true); // Создано для фикса резкого закрытия списка песен

  const handleMoreClick = function(e) {
    if(isOpenedSongList) {
      setOpenedSongList(false);
      setTimeout(function() {
        setDisabledSongList(true)
      }, 300);
    } else {
      setDisabledSongList(false);
      setOpenedSongList(true);
    }
  }

  const handleSwitchClick = function(e) {
    setReleasesActive(!isReleasesActive);
  }

  React.useEffect(() => {
    audioFile.addEventListener('timeupdate', handleSongTimeUpdate);
  });

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
      const mins = Math.floor(audioFile.currentTime / 60);
      if (mins < 10) {
        setCurrentMinutes(`0${mins}`);
      } else {
        setCurrentMinutes(mins);
      }
      const secs = Math.floor(audioFile.currentTime % 60);
      if (secs < 10) {
        setCurrentSeconds(`0${secs}`);
      } else {
        setCurrentSeconds(secs);
      }
    changeProgressFill(document.querySelector('.player__timeline'));
  }

  const handleTimelineChange = function(e) {
    audioFile.currentTime = e.target.value;
  }

  const handleTimelineInput = function(e) {
    changeProgressFill(e.target);
  }

  const changeProgressFill = function(target) {
    target.style.background = `linear-gradient(to right, white 0%, white ${(target.value-target.min)/(target.max-target.min)*100}%, rgba(255, 255, 255, .3) ${(target.value-target.min)/(target.max-target.min)*100}%, rgba(255, 255, 255, .3) 100%)`
  }

  return (

      <div className={`player ${isOpenedSongList ? 'player__songs_active' : ''}`}>
        {playing ? <img onClick={handlePlayClick} className="player__play-button" src={pauseImage} alt="Пауза" /> :
          <img onClick={handlePlayClick} className="player__play-button" src={playImage} alt="Воспроизведение" />}
        <div className="player__info">
          <p className="player__song-title">{ currentSong.title }</p>
          <span className="player__time">{currentSeconds ? `${currentMinutes}:${currentSeconds}` : '00:00'}</span>
        </div>
        <input onInput={handleTimelineInput} onChange={handleTimelineChange} className="player__timeline" type="range" name="time" min="0" max={Math.floor(audioFile.duration).toString()} value={audioFile.currentTime}/>
        {isOpenedSongList ? <button onClick={handleSwitchClick} className="player__switch-button">{isReleasesActive ? 'Текст песни' : 'Релизы'}</button> : <></>}
        <img alt="Подробнее" src={isOpenedSongList ? closeMoreImage : moreImage} className="player__more-button" onClick={handleMoreClick}/>

        {/* 1. Если посмотреть на макет, то раздел Songs должен быть такой же ширины, как полоса прокрутки песни и свитч-кнопка вместе, и должен стоять строго под ними. Пока Songs стоял снаружи дива, тяжело было рассчитывать ширину и ставить его строго под плеером. На одном разрешении совмещаешь, сжимаешь экран на 10-20 пикселей и все снова съезжает.

        2. Из-за этого появился маленький баг при закрытии Songs. Ты сам увидишь, когда запустишь. Надеюсь, он решится с помощью jquery.*/}
        <Songs song={currentSong.songText.split('\n')} isReleasesActive={isReleasesActive} isOpened={isOpenedSongList} isDisabled={isDisabledSongList}/>
      </div>

  )
}

export default Player
