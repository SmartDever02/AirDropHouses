import { useTranslation } from 'react-i18next';

import Gradient from '../../components/Typhography/GradientTitle';
import MTitle from '../../components/Typhography/Manual';

//import red dice svg
import diceIcon from '../../resources/images/landing/dices/dice.svg';

import data from '../../data/structure/landing.json';

const ManualSection = () => {
  const { t } = useTranslation(['landing']);
  return (
    <section className='manual-section relative mt-[50px] md:mt-[100px] lg:mt-[190px] md:pt-[50px] flex flex-col items-center justify-center'>
      <Gradient>{t(data.manual.title)}</Gradient>
      <div className='mt-[12px] sm:mt-[22px] md:mt-[32px] xl:mt-[58px] w-full px-[5%] md:px-[70px] xl:max-w-[1440px]'>
        <div className='rounded-xl w-full bg-[#343444] pt-[27px] pb-[35px] text-center text-white text-[16px] sm:text-[18px] leading-[30px] sm:leading-[26px] md:leading-[30px] xl:leading-[36px]'>
          <div className='px-[35px]'>
            <MTitle red>【{t(data.manual.subtitle_important)}】</MTitle>
            {t(data.manual.important_notice_description)}
          </div>
          <div className='mt-[15px] md:mt-[30px] px-[35px]'>
            <MTitle>【{t(data.manual.subtitle_1)}】</MTitle>
            {t(data.manual.description_1)}
          </div>
          <div className='mt-[12px] px-[35px]'>
            <MTitle>【{t(data.manual.subtitle_2)}】</MTitle>
            {t(data.manual.description_2_1)}
            <br />
            {t(data.manual.description_2_2)}
            <br />
            {t(data.manual.description_2_3)}
          </div>
          <div className='mt-[12px] px-[12px] block md:flex flex-col items-center'>
            <MTitle>【{t(data.manual.subtitle_3)}】</MTitle>
            {t(data.manual.description_3_1)}
            <br />
            {t(data.manual.description_3_2)}
            <br />
            {t(data.manual.description_3_3)}
            <ul className='pl-[20px] md:pl-0 mt-[10px] flex flex-col gap-2 justify-start lg:justify-center'>
              <li className='inline-flex gap-3'>
                <img src={diceIcon} alt='dice' />
                {t(data.manual.mint_step_1)}
              </li>
              <li className='inline-flex gap-3'>
                <img src={diceIcon} alt='dice' />
                {t(data.manual.mint_step_2)}
              </li>
              <li className='inline-flex gap-3'>
                <img src={diceIcon} alt='dice' />
                {t(data.manual.mint_step_3)}
              </li>
              <li className='inline-flex gap-3'>
                <img src={diceIcon} alt='dice' />
                {t(data.manual.mint_step_4)}
              </li>
            </ul>
          </div>
          <div className='mt-[12px]'>
            <MTitle>【{t(data.manual.subtitle_4)}】</MTitle>
            <ul className='mt-[10px] flex flex-col gap-2 px-[35px] md:px-[15%] text-left justify-start lg:justify-center'>
              <li className='flex items-start gap-2'>
                <img src={diceIcon} alt='dice' className='translate-y-[7px]' />
                {t(data.manual.after_mint_step_1)}
              </li>
              <li className='flex items-start gap-2'>
                <img src={diceIcon} alt='dice' className='translate-y-[7px]' />
                {t(data.manual.after_mint_step_2)}
              </li>
              <li className='flex items-start gap-2'>
                <img src={diceIcon} alt='dice' className='translate-y-[7px]' />
                {t(data.manual.after_mint_step_3)}
              </li>
              <li className='flex items-start gap-2'>
                <img src={diceIcon} alt='dice' className='translate-y-[7px]' />
                {t(data.manual.after_mint_step_4)}
              </li>
            </ul>
          </div>
          <div className='mt-[12px] mb-[10px] flex flex-col items-center gap-3 px-[35px] md:px-[18%]'>
            <MTitle>【{t(data.manual.subtitle_5)}】</MTitle>
            {t(data.manual.description_5_1)}
            <br className='hidden md:block' />
            {t(data.manual.description_5_2)}
          </div>
          <hr className='hidden md:block mb-[18px] mx-10' />
          <div className='text-center px-[35px] md:px-[9%]'>
            {t(data.manual.note)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ManualSection;
