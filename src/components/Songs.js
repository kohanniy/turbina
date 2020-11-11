import React from 'react';
import Song from './Song';


const Songs = function({ songs, song, isReleasesActive, onSongClick }) {

  const createSongList = function() {
    const textArray = []
    song.forEach((string, index) => {
      textArray.push(string === '' ?
        <li key={index} className="song__string">
          <div className="song__string_skip"/>
        </li>
        :
        <li key={index} className="song__string">
          <p className="song__string_text">{string}</p>
        </li>)
    })
    return textArray
  }

  return (
    <div className={`songs`}>
      {!isReleasesActive ?
        <div className="songs__wrapper">
          <p className="songs__type">Релизы:</p>
          <ul className="songs__list">
            {songs.map(song =>
              <Song onSongClick={onSongClick} songData={song} key={song.id.toString()} />
            )}
          </ul>
        </div>
        :
        <div className="songs__wrapper">
          <p className="songs__type">Текст песни:</p>
          <ul className="song__text">
            {
              createSongList()
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Songs
