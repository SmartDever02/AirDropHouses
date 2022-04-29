import { Contract } from '@ethersproject/contracts';
import { useCall, useContractCall } from '@usedapp/core';
import contractAbi from '../abi/AirDropHouses.json';
import { contractAddress } from '../config/config';

const ToString = (value) => {
  if (value.toString() === '0') {
    return 'NONE';
  } else if (value.toString() === '1') {
    return 'PRESALE';
  } else if (value.toString() === '2') {
    return 'PUBLIC_SALE';
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
