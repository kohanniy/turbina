const convertSecToMin = function(time) {
  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor(time % 60);
  let ret = "";
  if (min < 10) {
    ret += `0${min}:${sec < 10 ? '0' : ''}`
  }
  ret += `${sec}`;
  return ret;
}

export default convertSecToMin;
