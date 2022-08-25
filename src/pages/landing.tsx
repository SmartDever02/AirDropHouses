import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import { lazy, Suspense } from 'react';

import TwinkleBackground from '../components/Background/TwinkleBackground';
import HomeLayout from '../layout/home';
import FallingStar from '../components/Background/FallingStar';
import HomeSection from './landing-sections/HomeSection';

const IntroductonNFT = lazy(() => import('./landing-sections/IntroductionNFT'));
const RoadmapSection = lazy(() => import('./landing-sections/RoadmapSection'));
const ManualSection = lazy(() => import('./landing-sections/ManualSection'));
const WhitelistSection = lazy(
  () => import('./landing-sections/WhitelistSection')
);
const FAQSection = lazy(() => import('./landing-sections/FAQSection'));
const PartnerSection = lazy(() => import('./landing-sections/PartnerSection'));

const Landing = () => {
  const hash = useLocation().hash;

  return (
    <HomeLayout hash={hash}>
      <div>
        <TwinkleBackground position='fixed' />
      </div>
      <FallingStar />
      <Element name='home' className='element'>
        <Suspense fallback={null}>
          <HomeSection />
        </Suspense>
      </Element>
      <Element name='roadmap' className='element'>
        <Suspense fallback={null}>
          <RoadmapSection />
        </Suspense>
      </Element>
      <Element name='manual' className='element'>
        <Suspense fallback={null}>
          <ManualSection />
        </Suspense>
      </Element>
      <Element name='intro' className='element'>
        <Suspense fallback={null}>
          <IntroductonNFT />
        </Suspense>
      </Element>
      <Element name='whitelist' className='element'>
        <Suspense fallback={null}>
          <WhitelistSection />
        </Suspense>
      </Element>
      <Element name='partner' className='element'>
        <Suspense fallback={null}>
          <PartnerSection />
        </Suspense>
      </Element>
      <Element name='faq' className='element'>
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </Element>
    </HomeLayout>
  );
};
export default Landing;
