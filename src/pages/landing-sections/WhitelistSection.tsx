import { useTranslation } from 'react-i18next';

import DiscordButton from '../../components/Buttons/DiscordButton';
import ButtonMore from '../../components/Buttons/MoreButton';
import Content from '../../components/Typhography/Content';
import GoldenText from '../../components/Typhography/GoldenText';
import Gradient from '../../components/Typhography/GradientTitle';
import WhitelistItem from '../../components/Whitelists/WhitelistItem';
import config from '../../config/config';

import data from '../../data/structure/landing.json';

const WhitelistSection = () => {
  const { t } = useTranslation(['landing']);
  let whitelists = data.whitelists;

  return (
    <section className='whitelist-section relative pt-[30px] md:pt-[85px] xl:pt-[110px] text-center'>
      <div className='flex flex-col gap-[10px]'>
        <Gradient>{t('how_to_earn_whitelist')}</Gradient>
        <div className='hidden md:block'>
          <Content>{t('whitelist_official_and_partners')}</Content>
        </div>
      </div>
      <div className='mt-[20px] sm:mt-[36px] md:mt-[54px] xl:mt-[64px] px-[5%] md:px-[70px] xl:px-0 xl:max-w-[1400px] mx-auto w-full'>
        <div className='rounded-xl bg-[#343444] pt-[23px] pb-[25px] md:pb-[30px] xl:pb-[35px]'>
          <h3 className='text-[18px] md:text-[24px] leading-[36px] md:leading-[48px] '>
            <GoldenText>【{t('earn_official_whitelist')}】</GoldenText>
          </h3>
          <p className='text-[17px] leading-[28px] text-white px-[10%]'>
            <span className='hidden md:block'>
              {t('official_whitelist_description')}
            </span>
          </p>
          <div className='flex px-[5%] justify-center mt-[12px] md:mt-[22px] xl:mt-[29px]'>
            <a target='_blank' href={config.discord_url} rel='noreferrer'>
              <DiscordButton exception>
                {t('join_discord_for_whitelist')}
              </DiscordButton>
            </a>
          </div>
          <div className='hidden md:block'>
            <h3 className='mt-[25px] text-[24px] leading-[48px] '>
              <GoldenText>【{t('earn_whitelist_from_partners')}】</GoldenText>
            </h3>
            <p className='text-[18px] leading-[36px] text-white'>
              {t('partners_whitelist_description')}
            </p>
          </div>
          <div className='w-full mt-[15px] md:mt-[20px] xl:mt-[30px] px-[10%] md:px-[5%] px-[10%] grid sm:grid-cols-1 md:grid-cols-5 gap-[8px] md:gap-x-[20px] md:gap-y-[14px] xl:gap-x-[30px] xl:gap-y-[21px]'>
            {whitelists.map((one, index) => (
              <WhitelistItem key={index} index={index + 1} image={one} />
            ))}
          </div>
          <div className='mt-[16px] sm:mt-[20px] md:mt-[36px] xl:mt-[52px]'>
            <ButtonMore>{t('see_more')}</ButtonMore>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitelistSection;
