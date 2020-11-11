import React from 'react'

const Song = function({ songData, onSongClick }) {

  return (
    <li onClick={() => onSongClick(songData)} className="song">
      <p className="song__title">{`${songData.title} — ${songData.originalAuthor} feat ${songData.author}`}</p>
    </li>
  )
}

export default Song;
