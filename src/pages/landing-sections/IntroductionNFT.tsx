import { useTranslation } from 'react-i18next';

import MintButton from '../../components/Buttons/MintButton';
import Content from '../../components/Typhography/Content';
import Gradient from '../../components/Typhography/GradientTitle';

//import introduction ntf image.
import introImage from '../../resources/images/landing/blind_box.gif';

const IntroductonNFT = () => {
  const { t } = useTranslation(['landing']);
  return (
    <section className='intro-section pt-[10px] sm:pt-[20px] md:pt-[50px] mt-[100px] flex flex-col items-center'>
      <div className='w-full text-center px-[25px] bg-gradient-to-b from-[#14141F] to-black lg:from-transparent lg:to-transparent'>
        <div className='translate-y-0 sm:translate-y-[10px] 2xl:translate-y-[60px] '>
          <Gradient>{t('chance_fate')}</Gradient>
          <Content landing>{t('scene_6_subtitle')}</Content>
        </div>
      </div>
      <div className='w-full max-w-[1440px] lg:px-[10vw] mx-auto'>
        <video autoPlay muted loop>
          <source
            src={require('../../resources/images/landing/blind_box.mp4')}
            type='video/mp4'
          />
        </video>
      </div>

      {/* <img src={introImage} alt='intro' className='w-[1400px]' /> */}
      <div className='text-white w-full px-[5%] md:px-[170px] lg:px-[35%] -translate-y-[30px] sm:-translate-y-[20px] lg:-translate-y-[100px]'>
        <MintButton introduction>
          <span className='leading-[22px]'>{t('mint')}</span>
        </MintButton>
      </div>
    </section>
  );
};
export default IntroductonNFT;
