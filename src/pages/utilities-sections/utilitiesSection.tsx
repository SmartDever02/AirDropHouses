import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { stateType } from '../../app/store';
/* import CreateTags from '../../components/Utilities/CreateTags'; */

import SingleSelector from '../../components/Utilities/SingleSelector';
import Gradient from '../../components/Typhography/GradientTitle';

import data from '../../data/structure/utility.json';
import FilteredData from '../../components/Utilities/FilteredData';
import isDisabled from '../../helpers/disabledByType';

const UtilitySection = () => {
  const { t } = useTranslation(['utility']);
  const filters = useSelector((state: stateType) => state.filters);
  const companies = ['coOper_label', ...data.companies.map(item => item.name)];

  return (
    <div className='bg-[#14141F] w-screen pt-[20px] md:pt-[68px] px-[35px] md:px-[40px] xl:px-[80px] 2xl:px-[107px] pb-[80px] min-h-[60vh]'>
      <div className='3xl:max-w-[1710px] 3xl:mx-auto'>
        <span className='hidden md:block'>
          <Gradient>{t('utilities')}</Gradient>
        </span>
        <div className='filter md:mt-[18px] flex flex-wrap gap-[8px] md:gap-[17px]'>
          <SingleSelector
            filter='utilityType'
            key={'utilityType_label'}
            label={t('utilityType_label')}
            data={data.utilityType.data}
          />
          <SingleSelector
            filter='coOper'
            key={'coOper_label'}
            label={t('coOper_label')}
            data={companies}
            disabled={isDisabled(filters.type)}
          />
        </div>
        {/* <CreateTags filters={filters} /> */}
        <FilteredData />
      </div>
    </div>
  );
};

export default UtilitySection;
