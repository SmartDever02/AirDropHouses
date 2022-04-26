import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { stateType } from '../../app/store';
import CreateTags from '../../components/Utilities/CreateTags';

import SingleSelector from '../../components/Utilities/SingleSelector';
import Gradient from '../../components/Typhography/GradientTitle';

import data from '../../data/structure/utility.json';
import FilteredData from '../../components/Utilities/FilteredData';
import isDisabled from '../../helpers/disabledByType';

const UtilitySection = () => {
  const { t } = useTranslation(['utility']);
  const filters = useSelector((state: stateType) => state.filters);

  return (
    <div className='bg-[#14141F] w-screen pt-[20px] md:pt-[68px] px-[35px] md:px-[40px] xl:px-[80px] 2xl:px-[107px] pb-[80px] min-h-[60vh]'>
      <span className='hidden md:block'>
        <Gradient>{t('utilities')}</Gradient>
      </span>
      <div className='filter md:mt-[18px] flex flex-wrap gap-[8px] md:gap-[17px]'>
        <SingleSelector
          filter='utilityType'
          key={data.utilityType.label}
          label={t(data.utilityType.label)}
          data={data.utilityType.data}
        />
        <SingleSelector
          filter='coOper'
          key={data.coOper.label}
          label={t(data.coOper.label)}
          data={data.coOper.data}
          disabled={isDisabled(filters.type)}
        />
      </div>
      <CreateTags filters={filters} />
      <FilteredData />

      <div className='mt-[70px] mb-[50px] flex justify-center text-white font-bold text-[24px] leading-[26px] tracking-[18%]'>
        {/* 第一頁 ←上一頁 1 2 3 4 5 6 7 下一頁→ 最終頁 */}
      </div>
    </div>
  );
};

export default UtilitySection;
