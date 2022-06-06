import { useTranslation } from 'react-i18next';
import getBatchNum from '../../helpers/getBatchNumber';
import useMintedCount from '../../hooks/useMintedCount';
import useSaleMode from '../../hooks/useSaleMode';
import useTimePast from '../../hooks/useTimePast';
import useTotalCount from '../../hooks/useTotalCount';
import MintCard from './MintCard';

const DetailPanel = () => {
  const mintedCount = useMintedCount().toNumber();
  const totalCount = useTotalCount().toNumber();
  const timePast = useTimePast().toNumber();
  const saleMode = useSaleMode();

  // console.log(timePast / 3600);

  const { t } = useTranslation(['minting']);

  const timeToNextBatch = (value: number) => {
    // console.log('next batch', 7200 - (value % 7200));
    return 7200 - (value % 7200);
  };

  const timeToPublicSale = (value: number) => {
    // console.log('public:', 21600 - value);
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

  const isPublicSale = () => {
    return false;
  };

  // If Mint started, hardcode need to change
  const mintStarted = false;

  // changing text based on status, hardcode num need to change (1,2,3)
  let status = 'before';
  let batch = '';
  if (mintStarted) {
    const num = 1;
    status = isPublicSale() ? 'public' : 'pre';
    batch = '_batch_' + num;
  }

  // hardcode need to change
  const totalMinted = 0;

  return (
    <div className='Mint_DETAIL mt-[21px] flex flex-col gap-[16px] xl:gap-[18px] mb-[47px] lg:mb-0 lg:-translate-x-[18vw] xl:-translate-x-[15vw] 2xl:-translate-x-[10vw] lg:mt-[120px] xl:mt-[60px] 2xl:mt-[136px]'>
      <MintCard
        top={t('nft_left')}
        middle={saleMode === 'pre' ? mintedCount : '2,000'}
        bottom={`${t('nft_total')} ${mintedCount} / 2,000`}
      />
      <div
        className={`${
          saleMode === 'public' ||
          (saleMode === 'pre' && getBatchNum(timePast) >= 4 && 'blur-sm')
        }`}
      >
        <MintCard
          top={t(saleMode + '_sale_next_batch_whitelist_count_down')}
          middle={
            saleMode === 'pre'
              ? getBatchNum(timePast) >= 4
                ? '00:00:00'
                : makeTime(timeToPublicSale(timePast))
              : '00:00:00'
          }
          bottom={t(saleMode + '_sale_next_batch_whitelist_count_down_desc')}
        />
      </div>
      <div
        className={`${
          saleMode === 'public' ||
          (saleMode === 'pre' && getBatchNum(timePast) >= 4 && 'blur-sm')
        }`}
      >
        <MintCard
          top={t(saleMode + '_sale_next_mint_price_count_down')}
          middle={
            saleMode === 'pre'
              ? getBatchNum(timePast) >= 4
                ? '00:00:00'
                : makeTime(timeToNextBatch(timePast))
              : '00:00:00'
          }
          bottom={t(saleMode + '_sale_next_mint_price_count_down_desc')}
        />
      </div>
    </div>
  );
};

export default DetailPanel;
