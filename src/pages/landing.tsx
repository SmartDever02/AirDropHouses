import { useLocation } from 'react-router-dom';
import {
  /* Link,
  Button,
  
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller, */
  Element,
} from 'react-scroll';

import TwinkleBackground from '../components/Background/TwinkleBackground';
import HomeLayout from '../layout/home';
import FAQSection from './landing-sections/FAQSection';
import HomeSection from './landing-sections/HomeSection';
import IntroductonNFT from './landing-sections/IntroductionNFT';
import RoadmapSection from './landing-sections/RoadmapSection';
import ManualSection from './landing-sections/ManualSection';
// import PartnerSection from './landing-sections/PartnerSection';
import WhitelistSection from './landing-sections/WhitelistSection';
import FallingStar from '../components/Background/FallingStar';
import PartnerSection from './landing-sections/PartnerSection';

const Landing = () => {
  const hash = useLocation().hash;

  return (
    <HomeLayout hash={hash}>
      <div>
        <TwinkleBackground position='fixed' />
      </div>
      <FallingStar />
      <Element name='home' className='element'>
        <HomeSection />
      </Element>
      <Element name='roadmap' className='element'>
        <RoadmapSection />
      </Element>
      <Element name='manual' className='element'>
        <ManualSection />
      </Element>
      <Element name='intro' className='element'>
        <IntroductonNFT />
      </Element>
      <Element name='whitelist' className='element'>
        <WhitelistSection />
      </Element>
      <Element name='partner' className='element'>
        <PartnerSection />
      </Element>
      <Element name='faq' className='element'>
        <FAQSection />
      </Element>
    </HomeLayout>
  );
};
export default Landing;
