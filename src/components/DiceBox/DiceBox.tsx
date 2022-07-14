import { useTranslation } from 'react-i18next';
import GoldenText from '../Typhography/GoldenText';

const DiceBox = (props: diceType) => {
  const { t } = useTranslation(['landing']);
  const image = require('../../resources/images/landing/dices/' +
    props.type.toLowerCase() +
    'Dice.svg');
  return (
    <div className='bg-[#343444] flex flex-col justify-center items-center pt-[35px] md:pt-[45px] pb-[30px] md:pb-[54px] h-[256px] md:h-[309px] rounded-xl max-w-[450px] w-full px-6 lg:px-14 text-center'>
      <>
        <img
          src={image}
          alt='red'
          loading='lazy'
          width='120'
          height='111'
          draggable={false}
          className='select-none'
        />
        <p className='mt-[11px] text-[17px] md:text-[22px] leading-[22px] sm:leading-[26px] font-bold'>
          <GoldenText>{t('dice_title_' + props.type.toLowerCase())}</GoldenText>
        </p>
        <p className='text-white pt-[8px] text-[14px] leading-[21.7px] md:text-[18px] md:leading-[27.5px]'>
          {t('dice_subtitle_' + props.type.toLowerCase())}
        </p>
      </>
    </div>
  );
};

interface diceType {
  type: 'BLUE' | 'RED' | 'YELLOW';
}

export default DiceBox;
