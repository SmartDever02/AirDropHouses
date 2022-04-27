import { useTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Content from '../../components/Typhography/Content';
import Gradient from '../../components/Typhography/GradientTitle';

//import partner logos
import partner1 from '../../resources/images/landing/partners/fzi_logo.png';
import partner2 from '../../resources/images/landing/partners/fi_logo.png';
import partner3 from '../../resources/images/landing/partners/fl_logo.png';
import partner5 from '../../resources/images/landing/partners/lpg_logo.png';
import partner6 from '../../resources/images/landing/partners/sph_logo.png';

//import partner data from JSON
import data from '../../data/structure/landing.json';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1600 },
    items: 6,
  },
  normal: {
    breakpoint: { max: 1600, min: 0 },
    items: 4,
  },
};

const PartnerSection = () => {
  const { t } = useTranslation(['landing']);
  const partners = data.partners;

  const renderPartners = () => {
    return partners.map((partner, index) => {
      return (
        <Image
          key={index}
          src={require('../../resources/images/landing/partners/' +
            partner.img_url)}
          alt='comp'
          className='h-[20px] md:h-[50px] max-w-fit cursor-pointer'
          onClick={() => window.open(partner.link, '_blank')}
        />
      );
    });
  };
  return (
    <section className='partner-section pt-[50px] md:pt-[84px] xl:pt-[113px] text-center'>
      <div className='px-[15%] mb-[20px] md:mb-[50px]'>
        <Gradient>{t('partners')}</Gradient>
        <div className='block md:hidden'>
          <Content>{t('partners_subtitle')}</Content>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        autoPlay
        infinite
        centerMode
        pauseOnHover
        arrows={false}
      >
        {renderPartners()}
        {renderPartners()}
      </Carousel>
      ;
    </section>
  );
};

export default PartnerSection;