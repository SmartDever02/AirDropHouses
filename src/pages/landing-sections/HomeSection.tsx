import { useTranslation } from 'react-i18next';

import DiscordButton from '../../components/Buttons/DiscordButton';
import DiceBox from '../../components/DiceBox/DiceBox';
import Content from '../../components/Typhography/Content';
import Gradient from '../../components/Typhography/GradientTitle';
import MintButton from '../../components/Buttons/MintButton';

// import images
import landingHouse from '../../resources/images/landing/landingHouse.png';
import starFall from '../../resources/images/landing/starFall.svg';
import GoldenText from '../../components/Typhography/GoldenText';
import RoomCarousel from '../../components/Carousels/RoomCarousel';

import data from '../../data/structure/landing.json';
import config from '../../config/config';

const Left = (value: string) => {
  return <span className='text-[12px] sm:text-[16px]'>{value}</span>;
};
const Right = (value: string) => {
  return <span className='text-[14px] sm:text-[18px] text-right'>{value}</span>;
};

const HomeSection = () => {
  const { t } = useTranslation(['landing']);

  return (
    <section className='home-section pt-[88px] md:pt-[80px] w-screen relative before:absolute before:top-0 before:left-0 before:w-screen before:h-screen before:content-[""] before:bg-[url("resources/images/landing/wave.png")] before:bg-contain before:bg-no-repeat before:scale-x-[2] sm:before:scale-x-[2] before:scale-y-[3] before:translate-y-[120%] sm:before:scale-y-[2.5] sm:before:translate-y-[95%] md:before:scale-y-[2] sm:before:translate-x-[2.3vw] md:before:translate-x-[3vw] lg:before:translate-x-0 md:before:translate-y-[50%] lg:before:scale-[1] lg:before:translate-y-[80px]'>
      <div className='relative flex flex-col-reverse lg:flex-row'>
        <img
          src={landingHouse}
          alt='house'
          className='static lg:absolute mt-[2vw] md:mt-[4vw] lg:mt-0 lg:top-[5.5vw] xl:top-[5vw] 2xl:top-[4vw] block lg:right-0 z-1 -translate-x-[3vw] md:-translate-y-[3vw] lg:-translate-x-0 scale-[1.05] lg:scale-100 lg:w-[54vw] xl:w-[55.5vw] 2xl:w-[58vw]'
        />
        <div className='w-full lg:w-1/2'>
          <div className='pt-0 md:pt-[45px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[102px] 3xl:pt-[8vw] pl-0 md lg:pl-[90px] lg:[150px] xl:pl-[180px] 2xl:pl-[9vw] w-[320px] sm:w-[366px] md:w-[800px] xl:w-[830px] 2xl:w-[45.8vw] mx-auto lg:mx-0 2xl:ml-auto 2xl:scale-[1.15]'>
            <Gradient landing>{t('scene_1_title')}</Gradient>
            <h3 className='text-white font-bold text-[20px] sm:text-[22px] md:text-[34px] xl:text-[36px] leading-[4.25vw] xl:leading-[68px]'>
              {t(data.section_1.subtitle)}
            </h3>
            <div className='md:w-[800px] lg:w-[490px] xl:w-[524px] 2xl:w-[574px] 3xl:w-[28vw] py-[16px] md:py-[18px] xl:py-[21px]'>
              <Content landing>
                {t(data.section_1.text[0])}
                <br />
                {t(data.section_1.text[1])}
              </Content>
            </div>
            <div className='mt-[10px] md:mt-0'>
              <a target='_blank' href={config.discord_url} rel='noreferrer'>
                <DiscordButton>{t(data.discord.whitelist)}</DiscordButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='relative pt-[20px] sm:pt-[30px] md:pt-[100px] lg:pt-[120px] xl:pt-[200px] 2xl:pt-[350px] pb-[30px] md:pb-[60px] xl:pb-[91px] text-center px-[25px]'>
        <div className='hidden lg:block absolute top-[6vw]'>
          <img src={starFall} alt='starfall' />
        </div>
        <Gradient>{t(data.section_2.title)}</Gradient>
        <p className='text-[18px] leading-7 font-bold text-white pt-[10px]'>
          {t(data.section_2.subtitle)}
        </p>
        <div className='dices mt-[3.65vw] px-[5%] flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-7 '>
          <DiceBox type='BLUE' />
          <DiceBox type='YELLOW' />
          <DiceBox type='RED' />
        </div>
      </div>
      <div className='pt-0 md:pt-[20px] xl:pt-[57px] pb-[35px] md:pb-[60px] xl:pb-[84px] flex flex-col items-center'>
        <div className='px-[30px] text-center'>
          <Gradient>{t(data.section_3.title)}</Gradient>
        </div>
        <div className='flex flex-col lg:flex-row px-[5%] md:px-[14%] lg:px-[7%] 2xl:px-[13.3%] w-full gap-6 pt-[15px] md:pt-[40px] xl:pt-[62.5px] justify-center items-center'>
          <div className='w-full max-w-[645px] RoomCarousel'>
            <RoomCarousel />
          </div>
          <div className='w-full max-w-[750px]'>
            <div className='bg-[#343444] text-white rounded-[6px] lg:rounded-xl pt-[16px] xl:pt-[26px] pb-4 xl:pb-5 px-5 lg:px-8'>
              <div className='flex justify-between items-center'>
                <span className='text-[20px] sm:text-[24px] md:text-[30px] lg:text-[28px] xl:text-[36px] font-bold'>
                  {t('house_price')} <GoldenText>1300{t('pricing')}</GoldenText>
                </span>
                <span className='hidden lg:block text-[13px] sm:text-[22px] lg:text-[20px] xl:text-[24px] font-normal'>
                  {t('rent')}
                  <GoldenText className='text-yellow-500'>
                    2.5{t('pricing')}
                  </GoldenText>
                </span>
              </div>
              <p className='text-normal text-[14px] sm:text-[15px] md:text-2xl mt-[8px] sm:mt-3'>
                {t('price_per_ping')}54.79{t('pricing')}/{t('ping')}
              </p>
            </div>
            <div className='flex gap-[10px] md:gap-[25px] mt-2 md:mt-3 lg:mt-2 xl:mt-3'>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('size'))}
                {Right(`23.71${t('ping')}`)}
              </div>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('rooms'))}
                {Right(`2${t('room')} 1${t('living_room')} 1${t('bathroom')}`)}
              </div>
            </div>
            <div className='flex gap-[10px] md:gap-[25px] mt-2 md:mt-3 lg:mt-2 xl:mt-3'>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base  py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('floor'))}
                {Right('4F/16F')}
              </div>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base  py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('face'))} {Right('坐東南朝西北')}
              </div>
            </div>
            <div className='flex gap-[10px] md:gap-[25px] mt-2 md:mt-3 lg:mt-2 xl:mt-3'>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('age'))}
                {Right('25年')}
              </div>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('complex'))}
                {Right(t('yunanmrt'))}
              </div>
            </div>
            <div className='flex gap-[10px] md:gap-[25px] mt-2 md:mt-3 lg:mt-2 xl:mt-3'>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('type'))}
                {Right(t('residence_office'))}
              </div>
              <div className='w-full bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
                {Left(t('type2'))}
                {Right(t('elevator_building'))}
              </div>
            </div>
            <div className='mt-3 lg:mt-2 xl:mt-3 bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base py-[7px] xl:py-[13px] px-[27px] flex justify-between'>
              {Left(t('address'))}
              {Right(t('house1_address'))}
            </div>
            <div className='mt-3 lg:mt-2 xl:mt-3 bg-[#343444] text-white rounded-[6px] lg:rounded-xl text-base pt-[13px] py-[20px] xl:py-293px] px-[27px] flex flex-col gap-[2px] sm:gap-2'>
              {Left(t('description'))}
              {Right(t('house1_description'))}
            </div>
            <MintButton>{t('mint')}</MintButton>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
