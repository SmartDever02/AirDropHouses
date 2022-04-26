import { useTranslation } from 'react-i18next';
import MintCard from './MintCard';

const DetailPanel = () => {
  const { t } = useTranslation(['minting']);
  return (
    <div className='Mint_DETAIL mt-[21px] flex flex-col gap-[16px] xl:gap-[18px] mb-[47px] lg:mb-0 lg:-translate-x-[18vw] xl:-translate-x-[15vw] 2xl:-translate-x-[10vw] lg:mt-[120px] xl:mt-[60px] 2xl:mt-[136px]'>
      <MintCard top={t('nft_left')} middle='1600' bottom={t('nft_total')} />
      <MintCard
        top={t('next_mint_price_count_down') + ' 2.0 ETH'}
        middle='-386 or 5:21:01'
        bottom={t('next_mint_price_count_down_desc')}
      />
      <MintCard
        top={t('next_batch_whitelist_count_down')}
        middle='1:25:01'
        bottom={t('next_batch_whitelist_count_down_desc')}
      />
    </div>
  );
};

export default DetailPanel;
