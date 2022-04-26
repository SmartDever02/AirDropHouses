import GoldenText from '../Typhography/GoldenText';
import { useDispatch } from 'react-redux';

import { removeAll } from '../../pages/utilities-sections/filterSlice';

const RemoveFilters = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(removeAll())}
      className='text-[14px] leading-[19px] cursor-pointer'
    >
      <GoldenText>重置</GoldenText>
    </div>
  );
};

export default RemoveFilters;
