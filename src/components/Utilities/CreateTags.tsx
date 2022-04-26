import { useTranslation } from 'react-i18next';
import makeRangeString from '../../helpers/rangeString';
import RemoveFilters from './RemoveFilters';
import Tag from './Tag';

import data from '../../data/structure/utility.json';

const CreateTags = (props: any) => {
  const { t } = useTranslation(['utility']);

  let { type, coOper } = props.filters;
  if (type === '' && coOper === '') {
    return <></>;
  }

  return (
    <div className='mt-[37px] flex flex-wrap items-center gap-[13px] text-white text-[14px] leading-[19px]'>
      <span>條件：</span>
      {type !== '' && <Tag filter='utilityType'>{t(type)}</Tag>}
      {coOper !== '' && <Tag filter='coOper'>{t(coOper)}</Tag>}
      <RemoveFilters />
    </div>
  );
};

export default CreateTags;
