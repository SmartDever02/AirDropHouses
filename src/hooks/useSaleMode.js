import { Contract } from '@ethersproject/contracts';
import { useCall, useContractCall } from '@usedapp/core';
import contractAbi from '../abi/AirDropHouses.json';
import { contractAddress } from '../config/config';

const ToString = (value) => {
  const modes = {
    0: 'before_sale',
    100: 'pre_sale',
    199: 'pre_sale_finished',
    200: 'public_sale',
    299: 'public_sale_finished'
  }
  return modes[value.toString()];
  if (value.toString() === '0') {
    return 'before';
  } else if (value.toString() === '1') {
    return 'pre';
  } else if (value.toString() === '2') {
    return 'public';
  }
};

const useSaleMode = () => {
  const { value, error } = useCall({
    contract: new Contract(contractAddress, contractAbi.abi),
    method: 'saleMode',
    args: [],
  }) || { value: [0] };

  return value ? ToString(value[0]) : ToString(0);
};

export default useSaleMode;
