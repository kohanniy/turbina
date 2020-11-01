import React from 'react';

import './songs.css';

const Songs = function(props) {
  return (
    <div className={`songs ${props.isDisabled ? 'songs_disabled' : ''} ${props.isOpened ? 'songs_active' : ''}`}>
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
        <li className="song">
          <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
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
        <li className="song">
          <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
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
        <li className="song">
          <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
        </li>
        <li className="song">
          <p className="song__title">№4 Кирпичи — Инди группа feat. Пётр Сковородников</p>
        </li>
      </ul>
    </div>
  );
}

export default Songs;
