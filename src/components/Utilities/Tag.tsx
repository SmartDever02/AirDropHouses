import { useDispatch } from 'react-redux';
import { setCoOper, setType } from '../../pages/utilities-sections/filterSlice';

import goldenCross from '../../resources/images/utilities/goldenCross.svg';
import GoldenText from '../Typhography/GoldenText';

const Tag = (props: tagType) => {
  const dispatch = useDispatch();

  const RemoveFilter = (filter: string, data: any) => {
    switch (filter) {
      case 'utilityType':
        dispatch(setType(''));
        break;
      case 'coOper':
        dispatch(setCoOper(''));
        break;
    }
  };

  return (
    <div
      onClick={() => {
        RemoveFilter(props.filter, props.data ? props.data : null);
      }}
      className='cursor-pointer rounded-[34px] p-[1px] w-fit h-[30.87px] bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
    >
      <div className='rounded-[33px] h-full bg-[#14141F] pl-[13px] pr-[10px] flex gap-[10px] items-center'>
        <GoldenText>{props.children}</GoldenText>
        <img src={goldenCross} alt='*' />
      </div>
    </div>
  );
};

interface tagType {
  children: any;
  filter: string;
  data?: Array<any>;
}

export default Tag;
