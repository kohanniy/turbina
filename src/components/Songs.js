import React from 'react';

import TempCSS from './TempCSS.css';

const Songs = function(props) {
  const createSongList = function() {
    const textArray = []
    props.song.forEach((string, index) => {
      textArray.push(string === '' ?
        <li key={index} className="song__string">
          <div className="song__string-skip"/>
        </li>
        :
        <li key={index} className="song__string">
          <p className="song__string-text">{string}</p>
        </li>)
    })
    return textArray
  }

  return (
    <div className={`songs`}>
      {props.isReleasesActive ?
        <ul className="songs__list">
          <li className="song">
            <p className="song__title">№6 Поезия — Мукулатура feat. Саша Петров</p>
          </li>
          <li className="song">
            <p className="song__title">№5 Лодка — СБПЧ feat. Маруся Романова</p>
          </li>
          <li className="song">
            <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
          </li>
          <li className="song">
            <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
          </li>
          <li className="song">
            <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
          </li>
        </ul>
        :
        <ul className="song__text">
          {
            createSongList()
          }
        </ul>
      }
    </div>
  )
}

export default Songs
