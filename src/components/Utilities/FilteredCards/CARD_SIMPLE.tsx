import { useTranslation } from 'react-i18next';
import { Img } from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';

import GoldenText from '../../Typhography/GoldenText';

import loader, { getNotFoundImage } from '../../../helpers/imageLoader';

const SIMPLE_CARD = (props: simpleType) => {
  const { t } = useTranslation(['utility']);

  const gotoCompany = (link: string) => {
    window.open(link, '_blank');
  };

  let image;
  try {
    image = require('../../../resources/images/utilities/images/' +
      props.type +
      '/' +
      props.index +
      '.png');
  } catch {}

  return (
    <div className='w-full md:h-[500px] lg:h-[275px] xl:h-[350px] 2xl:h-[416px] rounded-[12px] bg-[#343444] p-[13px] md:p-[15px] 2xl:p-[24px] flex flex-col lg:flex-row gap-[18px] md:gap-[25px] xl:gap-[30px] 2xl:gap-[54px]'>
      <Img
        title={props.link ? 'Visit This Company: ' + props.link : ''}
        src={image ? image : getNotFoundImage()}
        className={`hidden lg:block 2xl:w-full ${
          props.link ? 'hover:animate-pulse cursor-pointer' : ''
        }`}
        loader={loader}
        onClick={() => props.link && gotoCompany(props.link)}
      />
      <div
        title={props.link ? 'Visit This Company: ' + props.link : ''}
        className={`lg:hidden overflow-hidden rounded-[12px] w-full h-[150px] md:h-[210px] ${
          props.link ? 'hover:animate-pulse cursor-pointer' : ''
        }`}
      >
        <Img
          src={image ? image : getNotFoundImage()}
          className='w-full -translate-y-[60px] md:-translate-y-[100px]'
          loader={loader}
          onClick={() => props.link && gotoCompany(props.link)}
        />
      </div>
      <div className='w-full flex flex-col gap-[5px] 2xl:gap-[11px] text-white text-[18px] xl:text-[18px] leading-[28px] lg:leading-[22px] xl:leading-[27px] 2xl:pr-[10px]'>
        <span className='font-bold'>
          <GoldenText>{t(props.data[0])}</GoldenText>
        </span>
        <span className='font-bold text-[15px] xl:text-[15px] leading-[16px] xl:leading-[24px]'>
          {t(props.type)}
        </span>
        <span className='text-[16px]'>{t(props.data[1])}</span>
      </div>
    </div>
  );
};

interface simpleType {
  index: number;
  type: string;
  image: string;
  data: Array<string>;
  link?: string;
}

export default SIMPLE_CARD;
