import { useSelector } from 'react-redux';
import { stateType } from '../../app/store';

import {
  getAirDrop,
  getUtilities,
} from '../../helpers/getDataByType';

const FilteredData = () => {
  const filters = useSelector((state: stateType) => state.filters);

  return (
    <>
      {filters.type === 'utilityType_label' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getUtilities('dedicated_service', undefined, filters.coOper)}
          {getUtilities('real_estate_discount', 1, filters.coOper)}
          {getUtilities('bank_service', 3, filters.coOper)}
          {getUtilities('interior_related', 4, filters.coOper)}
          {getAirDrop('airdrop_houses', 6, filters.coOper)}
          {getAirDrop('airdrop_down_pay', 7, filters.coOper)}
        </div>
      )}
      {!['airdrop_down_pay', 'airdrop_houses', 'utilityType_label'].includes(filters.type) && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getUtilities(filters.type, undefined, filters.coOper)}
        </div>
      )}
      {['airdrop_down_pay', 'airdrop_houses'].includes(filters.type) && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getAirDrop(filters.type, undefined, filters.coOper)}
        </div>
      )}
    </>
  );
};

export default FilteredData;
