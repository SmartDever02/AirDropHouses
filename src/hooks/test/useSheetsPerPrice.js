import { Contract } from '@ethersproject/contracts';
import { useCall, useContractCall } from '@usedapp/core';
import { BigNumber } from 'ethers';
import contractAbi from '../../abi/AirDropHouses.json';
import { contractAddress } from '../../config/config';

const useSheetsPerPrice = () => {
  const { value, error } = useCall({
    contract: new Contract(contractAddress, contractAbi.abi),
    method: 'sheetsPerPrice',
    args: [],
  }) || { value: [BigNumber.from(0)] };
  return value ? value[0] : BigNumber.from(0);
};

export default useSheetsPerPrice;
