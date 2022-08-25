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
  var batchIndex = -1;
  var limitIndex = -1;
  var indexInArray = -1;
  // console.log('address: ', address);
  // console.log(data.length);
  for (let i = 0; i < data.length; i++) {
    let subData = data[i];
    for (let j = 0; j < subData.length; j++) {
      if (subData[j].data.indexOf(address) >= 0) {
        // alert('same thing');
        limitIndex = j;
        indexInArray = subData[j].data.indexOf(address);
        break;
      }
    }
    if (limitIndex !== -1) {
      batchIndex = i;
      break;
    }
  }
  // one.data.indexOf(address) >= 0);
  if (batchIndex === -1) {
    return {
      proof: null,
      verified: false,
      limit: 0,
    };
  }
  return {
    proof: data[batchIndex][limitIndex].proof[indexInArray],
    verified: batchIndex >= 0,
    limit: data[batchIndex][limitIndex].limit,
  };
};
