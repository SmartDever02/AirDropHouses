import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import TwinkleBackground from '../Background/TwinkleBackground';
import GoldenText from '../Typhography/GoldenText';
import CardGroup from './CardGroup';

const Banner = () => {
  let [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className='relative bg-[#151D31] mt-[78px] lg:mt-[80px] h-[146px] md:h-[190px] lg:h-[240px] xl:h-[320px] 2xl:h-[447px] w-full bg-no-repeat bg-[url("resources/images/utilities/utilityWave.png")] bg-[length:100vw_100px] md:bg-[length:100vw_190px] lg:bg-[length:100vw_240px] xl:bg-[length:100vw_320px] 2xl:bg-[length:100vw_447px]'>
      <div className='w-full h-full overflow-hidden relative'>
        <TwinkleBackground height={447} position='relative' />
        <Transition
          appear
          show={show}
          enter='transition-all duration-[1000ms]'
          enterFrom='opacity-0 scale-50 translate-y-[20vw] -translate-x-[40vw]'
          enterTo='opacity-100'
        >
          <CardGroup />
        </Transition>
      </div>
      <div className='absolute text-[16px] md:text-[30px] lg:text-[40px] xl:text-[56px] md:leading-[40px] lg:leading-[50px] xl:leading-[68px] font-bold text-white top-[40px] left-[30px] md:top-[45px] md:left-[80px] lg:top-[40px] lg:left-[90px] xl:top-[80px] 2xl:top-[110px] xl:left-[150px] 2xl:left-[200px] flex flex-col gap-[16px]'>
        <Transition
          appear
          show={show}
          enter='transition-all duration-[700ms]'
          enterFrom='opacity-0'
          enterTo='opacity-100'
        >
          最強豐富NFT地産賦能
          <br />
          <GoldenText>一對一財務健檢、建案折扣</GoldenText>
        </Transition>
      </div>
    </div>
  );
};

export default Banner;
