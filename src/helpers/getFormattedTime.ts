export const getBatchNum = (time: number, duration: number) => {
  return Math.floor(time / duration) + 1; // 7200 : 2hours
};

export const timeToNextBatch = (duration: number, value: number) => {
  // console.log('next batch', 7200 - (value % 7200));
  return duration - (value % duration);
};

export const timeToNextPrice = (totalDuration: number, value: number) => {
  // console.log('public:', 21600 - value);
  return totalDuration - (value % totalDuration);
};

export const makeTime = (value: number) => {
  let hour = Math.floor(value / 3600)
    .toString()
    .padStart(2, '0');
  let minute = (Math.floor(value / 60) % 60).toString().padStart(2, '0');
  let second = (value % 60).toString().padStart(2, '0');
  return hour + ':' + minute + ':' + second;
};
