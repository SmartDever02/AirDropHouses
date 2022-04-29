import { useTranslation } from 'react-i18next';
import useMintedCount from '../../hooks/useMintedCount';
import useTimePast from '../../hooks/useTimePast';
import useTotalCount from '../../hooks/useTotalCount';
import MintCard from './MintCard';

const DetailPanel = () => {
  const mintedCount = useMintedCount().toNumber();
  const totalCount = useTotalCount().toNumber();
  const timePast = useTimePast().toNumber();

  console.log(timePast / 3600);

  const { t } = useTranslation(['minting']);

  const timeToNextBatch = (value: number) => {
    console.log('next batch', 7200 - (value % 7200));
    return 7200 - (value % 7200);
  };

  const timeToPublicSale = (value: number) => {
    console.log('public:', 21600 - value);
    return 21600 - value;
  };

  const makeTime = (value: number) => {
    return (
      Math.floor(value / 3600) +
      ':' +
      (Math.floor(value / 60) % 60) +
      ':' +
      (value % 60)
    );
  };
  return (
    <div className='Mint_DETAIL mt-[21px] flex flex-col gap-[16px] xl:gap-[18px] mb-[47px] lg:mb-0 lg:-translate-x-[18vw] xl:-translate-x-[15vw] 2xl:-translate-x-[10vw] lg:mt-[120px] xl:mt-[60px] 2xl:mt-[136px]'>
      <MintCard top={t('nft_left')} middle={mintedCount} bottom={totalCount} />
      <MintCard
        top={t('next_mint_price_count_down') + ' 2.0 ETH'}
        middle={
          (mintedCount % 600) -
          600 +
          ' or ' +
          makeTime(timeToPublicSale(timePast))
        }
        bottom={t('next_mint_price_count_down_desc')}
      />
      <MintCard
        top={t('next_batch_whitelist_count_down')}
        middle={makeTime(timeToNextBatch(timePast))}
        bottom={t('next_batch_whitelist_count_down_desc')}
      />
    </div>
  );
};

export default DetailPanel;
