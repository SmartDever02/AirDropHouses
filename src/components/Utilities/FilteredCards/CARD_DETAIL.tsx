import { useTranslation } from 'react-i18next';

import ITEM from './ITEM';
import GoldenText from '../../Typhography/GoldenText';

import notFoundImage from '../../../resources/images/utilities/images/notFoundImage.svg';
import { Img } from 'react-image';
import loader from '../../../helpers/imageLoader';
import AirDropCarousel from './AIRDROPCAROUSEL';

const CARD_DETAIL = (props: detailType) => {
  const { t } = useTranslation(['utility']);
  const publicData = {
    public: props.data.public,
    text: props.data.public ? props.data.date + '公開發售' : '尚未公開',
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
    <div className='md:h-[780px] lg:h-[275px] xl:h-[350px] 2xl:h-[416px] rounded-[12px] bg-[#343444] p-[13px] md:p-[15px] 2xl:p-[24px] flex flex-col lg:flex-row gap-[18px] md:gap-[25px] xl:gap-[30px] 2xl:gap-[54px]'>
      {props.type === 'airdrop_houses' ? (
        <div className='AirDropCarousel relative'>
          <AirDropCarousel
            publicData={publicData}
            path={props.type}
            images={props.data.room_images}
          />
        </div>
      ) : (
        <Img
          src={image ? image : notFoundImage}
          className='rounded-[12px] 2xl:w-full'
          loader={loader}
        />
      )}

      <div className='w-full flex flex-col text-white text-[18px] xl:text-[18px] leading-[28px] lg:leading-[22px] xl:leading-[27px] 2xl:pr-[10px]'>
        <div className='flex justify-between font-bold'>
          <span>{t(props.data.title)}</span>
          <GoldenText>{t(props.data.airdrop)}</GoldenText>
        </div>
        <span className='text-[#8A8AA0] text-[13px]'>
          {t(props.data.winning_wallet)}
        </span>
        <span className='text-[15px] xl:text-[15px] leading-[16px] xl:leading-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077] pb-[20px] lg:pb-[5px] xl:pb-[20px] 2xl:pb-[40px] mb-[12px] border-b-[#7A798A] border-b-[1px] break-words lg:w-[290px] xl:w-[320px] 2xl:w-full'>
          {props.data.wallet_address}
        </span>
        <div className='grid grid-cols-3'>
          {props.data.values.map((value: any, index: number) => (
            <ITEM title={value.title} content={value.content} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface detailType {
  index: number;
  type: string;
  data: any;
}

export default CARD_DETAIL;
