const makeRangeString = (
  data: Array<any>,
  suffix: string,
  less: any,
  more: any
) => {
  if (
    (data[0] === -1 && data[1] === -1) ||
    (data[0] === -999999 && data[1] === 999999)
  )
    return data[2];
  if (data[0] === data[1]) return data[0] + suffix;
  let result = '';
  result +=
    data[0] !== 0
      ? data[0] + (data[1] !== 999999 ? '-' + data[1] : '')
      : data[1];
  result += suffix;
  result += less !== false && data[0] === 0 ? less : '';
  result += more !== false && data[1] === 999999 ? more : '';
  return result;
};

export default makeRangeString;
