import { useTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Content from '../../components/Typhography/Content';
import Gradient from '../../components/Typhography/GradientTitle';

//import partner data from JSON
import utilities from '../../data/structure/utility.json';

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
  const partners = utilities.companies;

  const renderPartners = () => {
    return partners.map((partner, index) => {
      return (
        <Image
          key={index}
          src={require('../../resources/images/utilities/companies/' +
            partner.img_url)}
          alt='comp'
          draggable={false}
          className='h-[20px] md:h-[50px] max-w-fit cursor-pointer select-none'
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
        autoPlaySpeed={3000}
        autoPlay
        infinite
        centerMode
        pauseOnHover
        arrows={false}
      >
        {renderPartners()}
        {renderPartners()}
        {renderPartners()}
      </Carousel>
    </section>
  );
};

export default PartnerSection;
