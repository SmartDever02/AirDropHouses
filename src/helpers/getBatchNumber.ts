const getBatchNum = (time: number) => {
  return Math.floor(time / 7200) + 1; // 7200 : 2hours
};

export default getBatchNum;
