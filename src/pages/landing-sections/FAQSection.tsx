import { useTranslation } from 'react-i18next';
import Disclosure from '../../components/FAQ/Disclosure';

import Content from '../../components/Typhography/Content';
import Gradient from '../../components/Typhography/GradientTitle';
import data from '../../data/structure/landing.json';

const FAQSection = () => {
  const { t } = useTranslation(['landing']);

  return (
    <section className='pt-[50px] md:pt-[100px] mb-[120px] relative'>
      <div className='flex flex-col items-center gap-[15px]'>
        <Gradient>{t('qna')}</Gradient>
        <Content>{t('faq')}</Content>
      </div>
      <div className='w-full max-w-[1410px] mx-auto mt-[20px] md:mt-[40px] xl:mt-[60px] mb-[50px] flex flex-col gap-[13px] md:gap-[26px] px-[6%]'>
        {data.faq.map((one, index) => {
          return (
            <Disclosure
              key={index}
              title={t(one.title)}
              content={t(one.content)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
