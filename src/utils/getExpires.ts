export const getExpires = (expire: number) => {
  expire = expire * 1000;

  const today = +new Date();
  const diff = expire - today;

  const currMinute = 60 * 1000;
  const currHour = 60 * currMinute;
  const currDay = 24 * currHour;

  const diffDay = diff / currDay;

  if (diffDay < 0) {
    return `만료됨`;
  } else if (diffDay < 2) {
    const diffMinute = ((diff / currMinute) % 60).toFixed(0);
    const diffHour = Math.floor(diff / currHour);
    return `${diffHour}시간 ${diffMinute}분`;
  } else {
    return `${Math.floor(diffDay)}일`;
  }
};
