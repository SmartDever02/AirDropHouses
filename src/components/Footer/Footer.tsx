import { useTranslation } from 'react-i18next';
import FooterText from './FooterText';
import LanguageBar from './LanguageBar';

//import structure
import data from '../../data/structure/landing.json';
import { Link } from 'react-router-dom';
import config from '../../config/config';

const Footer = () => {
  const { t } = useTranslation(['footer']);
  const footerData = data.footer;

  return (
    <footer className='lg:fixed lg:bottom-0 bg-[#151D31] lg:bg-black left-0 w-full h-20 flex items-center justify-between border-t-[1px] border-t-[#373740] text-white'>
      <div className='flex flex-row-reverse lg:flex-row items-center 2xl:max-w-[1440px] mx-auto w-full px-[8%] md:px-[5%] text-lg leading-4 justify-between'>
        <div className='flex gap-5 items-center sm:ml-[10%]'>
          <Link to='/disclaimer'>
            <FooterText>{t(footerData[0].i18name)}</FooterText>
          </Link>
          <div className='hidden lg:block'>
            <a target="_blank" href={config.whitepaper_url} rel="noreferrer">
              <FooterText>{t(footerData[1].i18name)}</FooterText>
            </a>
          </div>
          <div className='hidden lg:block'>
            <LanguageBar />
          </div>
        </div>

        <span className='font-bold text-[16px] sm:text-[18px]'>
          All right reserved by airdrophouse
        </span>
      </div>
    </footer>
  );
};

export default Footer;
