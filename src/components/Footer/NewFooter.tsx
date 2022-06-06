import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { Link } from 'react-router-dom';
import config from '../../config/config';

const NewFooter = (props: footerType) => {
  const currentLanguage = i18next.language;
  const { t } = useTranslation(['footer']);

  return (
    <footer className='w-screen lg:fixed lg:bottom-0 bg-[#151D31] lg:bg-black left-0 h-[180px] border-t-[1px] border-t-[#373740] text-white lg:translate-y-[125px] lg:hover:translate-y-0 transition-all delay-150 duration-300 flex items-center lg:items-start z-30'>
      <div className='px-[35px] md:px-0 md:max-w-[780px] lg:max-w-[1100px] xl:max-w-[1350px] 2xl:max-w-[1480px] w-full mx-auto pt-0 lg:pt-[18px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>
        <div className='flex order-4 md:order-1 flex-row flex-wrap md:flex-col gap-0 md:gap-[8px] text-[14px] leading-[26px] font-medium text-white'>
          <span className='text-[#8A8AA0] w-1/5 md:w-auto'>{t('about')}</span>
          <a
            target='_blank'
            href={config.whitepaper_url}
            className='footer-nav-item w-1/5 md:w-auto text-left'
            rel='noreferrer'
          >
            <span>{t('whitepaper')}</span>
          </a>
          <Link
            className={`footer-nav-item w-1/5 md:w-auto text-left ${
              props.page === 'disclaimer'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
                : ''
            }`}
            to='/disclaimer'
          >
            <span>{t('disclaimer')}</span>
          </Link>
          <div className='w-full text-left'>©2022 Airdrop Houses</div>
        </div>
        <div className='flex order-3 md:order-2 flex-row flex-wrap md:flex-col md:gap-[2px] text-[14px] leading-[26px] font-medium text-white border-b-[1px] border-b-slate-500 md:border-none'>
          <span className='text-[#8A8AA0] w-1/5 md:w-auto'>
            {t('social_links')}
          </span>
          <a
            target='_blank'
            href={config.discord_url}
            className='footer-nav-item w-1/5 md:w-auto text-left'
            rel='noreferrer'
          >
            <span>Discord</span>
          </a>
          <a
            target='_blank'
            href={config.facebook_url}
            className='footer-nav-item w-1/5 md:w-auto text-left'
            rel='noreferrer'
          >
            <span>Facebook</span>
          </a>
          <a
            target='_blank'
            href={config.twitter_url}
            className='footer-nav-item w-1/5 md:w-auto text-left pl-1 md:pl-0'
            rel='noreferrer'
          >
            <span>Twitter</span>
          </a>
          <a
            target='_blank'
            href={config.instagram_url}
            className='footer-nav-item w-1/5 md:w-auto text-left'
            rel='noreferrer'
          >
            <span>Instagram</span>
          </a>
        </div>
        <div className='flex order-2 md:order-3 flex-row md:flex-col gap-0 md:gap-[8px] text-[14px] leading-[26px] font-medium text-white border-b-[1px] border-b-slate-500 md:border-none'>
          <span className='text-[#8A8AA0] w-1/5 md:w-auto'>
            {t('nft_related')}
          </span>
          <a
            target='_blank'
            href={config.whitepaper_url}
            className='footer-nav-item w-1/5 md:w-auto text-left'
            rel='noreferrer'
          >
            <span>{t('whitepaper')}</span>
          </a>
          <Link to='/mint' className='footer-nav-item w-1/5 md:w-auto'>
            <span className='w-1/4 md:w-auto'>{t('minting_page')}</span>
          </Link>
          <Link to='/utilities' className='footer-nav-item w-1/5 md:w-auto'>
            <span className='w-1/4 md:w-auto'>{t('utilities')}</span>
          </Link>
        </div>
        <div className='flex order-1 md:order-4 flex-row md:flex-col gap-0 md:gap-[8px] text-[14px] leading-[26px] font-medium text-white border-b-[1px] border-b-slate-500 md:border-none'>
          <span className='text-[#8A8AA0] w-1/5 md:w-auto'>
            {t('language')}
          </span>
          <span
            onClick={() => i18next.changeLanguage('ts')}
            className={`footer-nav-item w-1/5 md:w-auto ${
              currentLanguage === 'ts' ? 'text-golden' : ''
            }`}
          >
            繁體中文
          </span>
          <span
            onClick={() => i18next.changeLanguage('en')}
            className={`footer-nav-item w-1/5 md:w-auto ${
              currentLanguage === 'en' ? 'text-golden' : ''
            }`}
          >
            English
          </span>
          <div className='footer-nav-item w-1/5 md:w-auto'>
            ©2022 Airdrop Houses
          </div>
        </div>
      </div>
    </footer>
  );
};

interface footerType {
  page?: string;
}

export default NewFooter;
