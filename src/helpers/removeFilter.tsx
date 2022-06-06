import { useDispatch } from 'react-redux';
import { setCoOper, setType } from '../pages/utilities-sections/filterSlice';

const RemoveFilter = (filter: string) => {
  const dispatch = useDispatch();
  switch (filter) {
    case 'utilityType':
      dispatch(setType(''));
      break;
    case 'coOper':
      dispatch(setCoOper(''));
      break;
  }
};

export default RemoveFilter;
