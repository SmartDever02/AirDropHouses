import axios from './axios';
import data from '../data/WhiteListInfo.json';

export const getWhiteListInfo = async (address) => {
  try {
    let response = await axios.get(`/whitelist/${address}`);
    return response.data;
  } catch (error) {
    console.log('loginerror: ', error);
    return Promise.reject(error.response.data.message);
  }
};

export const getWhitelistCount = async () => {
  try {
    let response = await axios.get('/whitelist-count');
    return response.data.count;
  } catch (error) {
    console.log('whitelist-count: ', error);
    return 0;
  }
};

export const getInfoFromJSON = (address) => {
  var indexInArray;
  let _data = data.filter((one) => one.data.indexOf(address) >= 0);
  if (_data.length !== 1) {
    return {
      proof: null,
      verified: false,
      limit: _data.limit,
    };
  }
  indexInArray = _data[0].data.indexOf(address);
  // let _data = data.filter((one, dataIndex) => {
  //   indexInArray = one.address.indexOf(address);
  //   console.log(indexInArray);
  //   if (indexInArray >= 0) {
  //     index = dataIndex;
  //   }
  //   return indexInArray >= 0;
  // })[0];
  // if (indexInArray) {
  //   return {
  //     proof: null,
  //     verified: false,
  //   };
  // }
  return {
    proof: [_data[0].proves[indexInArray]],
    verified: indexInArray >= 0,
    limit: _data[0].limit,
  };
};
