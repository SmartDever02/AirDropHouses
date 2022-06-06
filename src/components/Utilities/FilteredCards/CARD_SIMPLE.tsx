import { useTranslation } from 'react-i18next';
import { Img } from 'react-image';
/* import VisibilitySensor from 'react-visibility-sensor'; */

import GoldenText from '../../Typhography/GoldenText';

import loader from '../../../helpers/imageLoader';
import AirDropCarousel from './AIRDROPCAROUSEL';
import notFoundImage from '../../../resources/images/utilities/images/notFoundImage.svg';

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
      props.data.utility_images[0]
    );
  } catch {}

  return (
    <div className='md:h-[780px] lg:h-[275px] xl:h-[350px] 2xl:h-[416px] rounded-[12px] bg-[#343444] p-[13px] md:p-[15px] 2xl:p-[24px] flex flex-col lg:flex-row gap-[18px] md:gap-[25px] xl:gap-[30px] 2xl:gap-[54px]'>
      {props.data.utility_images.length > 1 ? (
        <div className='AirDropCarousel relative'>
          <AirDropCarousel
            path={props.type}
            images={props.data.utility_images}
          />
        </div>
      ) : (
        <Img
          src={image ? image : notFoundImage}
          className={`rounded-[12px] 2xl:w-full ${
            props.data.company_site ? 'hover:animate-pulse cursor-pointer' : ''}`}
          loader={loader}
          onClick={() => props.data.company_site && gotoCompany(props.data.company_site)}
        />
      )}
      <div className='w-full flex flex-col gap-[5px] 2xl:gap-[11px] text-white text-[18px] xl:text-[18px] leading-[28px] lg:leading-[22px] xl:leading-[27px] 2xl:pr-[10px]'>
        <span className={`font-bold ${ props.data.company_site ? 'hover:animate-pulse cursor-pointer' : ''}`} onClick={() => props.data.company_site && gotoCompany(props.data.company_site)}>
          <GoldenText>{t(props.data.company_name)}</GoldenText>
        </span>
        <span className='font-bold text-[15px] xl:text-[15px] leading-[16px] xl:leading-[24px]'>
          {t(props.data.title)}
        </span>
        <span className='text-[16px]'  dangerouslySetInnerHTML={{
          __html: t(props.data.content).split('\n').join('<br />')
        } } />
      </div>
    </div>
  );
};

interface simpleType {
  index: number;
  type: string;
  data: any;
}

export default SIMPLE_CARD;
