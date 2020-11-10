import React from 'react'

const Song = function({songData, onSongClick}) {
  const handleClick = function() {
    onSongClick(songData)
  }

  return (
    <li onClick={handleClick} className="song">
      <p className="song__title">{`${songData.title} — ${songData.originalAuthor} feat ${songData.author}`}</p>
    </li>
  )
}

export default Song;
