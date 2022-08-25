import { useTranslation } from 'react-i18next';
import { MINT_TEST } from '../../config/config';
import {
  getBatchNum,
  makeTime,
  timeToNextBatch,
  timeToNextPrice,
} from '../../helpers/getFormattedTime';
import useBatchDuration from '../../hooks/test/useBatchDuration';
import useSheetsPerPrice from '../../hooks/test/useSheetsPerPrice';
import useFromLastPriceChange from '../../hooks/useLastPriceTime';
import useLeftPresaleCount from '../../hooks/useLeftPresaleCount';
import useMintedCount from '../../hooks/useMintedCount';
import useSaleMode from '../../hooks/useSaleMode';
import useTimePast from '../../hooks/useTimePast';
import useTotalCount from '../../hooks/useTotalCount';
import MintCard from './MintCard';

const DetailPanel = () => {
  const fromLastChange = useFromLastPriceChange();
  const mintedCount = useMintedCount().toNumber();
  const totalCount = useTotalCount().toNumber();
  const leftCount = useLeftPresaleCount().toNumber();
  const timePast = useTimePast().toNumber();
  const saleMode = useSaleMode();

  // For Testing
  const sheetsPerPrice = useSheetsPerPrice().toNumber();
  const batchDuration = useBatchDuration().toNumber();
  const mcount = MINT_TEST ? sheetsPerPrice * 3 : 1500;

  // console.log(timePast / 3600);

  const { t } = useTranslation(['minting']);

  // const timeToNextBatch = (value: number) => {
  //   // console.log('next batch', 7200 - (value % 7200));
  //   return 7200 - (value % 7200);
  // };

  // const timeToNextPrice = (value: number) => {
  //   // console.log('public:', 21600 - value);
  //   return 21600 - (value % 21600);
  // };

  // const makeTime = (value: number) => {
  //   let hour = Math.floor(value / 3600)
  //     .toString()
  //     .padStart(2, '0');
  //   let minute = (Math.floor(value / 60) % 60).toString().padStart(2, '0');
  //   let second = (value % 60).toString().padStart(2, '0');
  //   return hour + ':' + minute + ':' + second;
  // };

  return (
    <div className='Mint_DETAIL select-none mt-[21px] flex flex-col gap-[16px] xl:gap-[18px] mb-[47px] lg:mb-0 lg:-translate-x-[18vw] xl:-translate-x-[15vw] 2xl:-translate-x-[10vw] lg:mt-[120px] xl:mt-[60px] 2xl:mt-[136px]'>
      <MintCard
        top={t('nft_left')}
        middle={saleMode === 'pre_sale' ? leftCount : 2000 - mintedCount}
        bottom={`${t('nft_total')} ${2000 - mintedCount} / 2000`}
      />
      <div
        className={`${
          (saleMode === 'public_sale' ||
            saleMode === 'before_sale' ||
            saleMode === 'pre_sale_finished' ||
            (saleMode === 'pre_sale' &&
              getBatchNum(timePast, MINT_TEST ? batchDuration : 7200) >= 10) ||
            mintedCount >= mcount) &&
          'blur-sm'
        }`}
      >
        <MintCard
          top={
            saleMode === 'pre_sale_finished'
              ? t('pre_sale_next_batch_whitelist_count_down')
              : t(saleMode + '_next_batch_whitelist_count_down')
          }
          middle={
            saleMode === 'pre_sale'
              ? getBatchNum(timePast, MINT_TEST ? batchDuration : 7200) >= 3
                ? 'All Whitelist'
                : makeTime(
                    timeToNextBatch(MINT_TEST ? batchDuration : 7200, timePast)
                  )
              : '00:00:00'
          }
          bottom={
            saleMode === 'pre_sale_finished'
              ? t('pre_sale_next_batch_whitelist_count_down_desc')
              : t(saleMode + '_next_batch_whitelist_count_down_desc')
          }
        />
      </div>
      <div
        className={`${
          (saleMode === 'public_sale' ||
            saleMode === 'before_sale' ||
            saleMode === 'pre_sale_finished' ||
            (saleMode === 'pre_sale' &&
              (getBatchNum(timePast, MINT_TEST ? batchDuration : 7200) >= 10 ||
                mintedCount >= mcount))) &&
          'blur-sm'
        }`}
      >
        <MintCard
          top={
            saleMode === 'pre_sale_finished'
              ? t('pre_sale_next_mint_price_count_down')
              : t(saleMode + '_next_mint_price_count_down')
          }
          middle={
            saleMode === 'pre_sale'
              ? getBatchNum(timePast, MINT_TEST ? batchDuration : 7200) >= 10
                ? '00:00:00'
                : makeTime(
                    timeToNextPrice(
                      MINT_TEST ? batchDuration * 3 : 21600,
                      fromLastChange
                    )
                  )
              : '00:00:00'
          }
          bottom={
            saleMode === 'pre_sale_finished'
              ? t('pre_sale_next_mint_price_count_down_desc')
              : t(saleMode + '_next_mint_price_count_down_desc')
          }
        />
      </div>
    </div>
  );
};

export default DetailPanel;
