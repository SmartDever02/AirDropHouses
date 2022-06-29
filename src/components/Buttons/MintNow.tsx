import { useTranslation } from 'react-i18next';

import useSaleMode from '../../hooks/useSaleMode';
import useTimePast from '../../hooks/useTimePast';

const getBatchNum = (time: number) => {
  return Math.floor(time / 7200) + 1; // 7200 : 2hours
};

const MintNow = (props: any) => {
  const saleMode = useSaleMode();
  const timePast = useTimePast().toNumber();

  const { t } = useTranslation(['minting']);

  const isDisable = () => {
    if (props.disable) {
      return true;
    }
    return saleMode === 'pre' && getBatchNum(timePast) >= 10 ? true : false;
  };

  return (
    <button
      onClick={() => {
        props.clickHandle();
      }}
      className={`w-full h-[29px] md:h-[46px] rounded-[8px] ${
        !isDisable()
          ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077] hover:from-[#F4E077] hover:to-[#F2974A]'
          : 'bg-[#A9A9A9] cursor-not-allowed'
      } text-center text-white font-bold`}
      disabled={isDisable()}
    >
      {t('mint')}
    </button>
  );
};

export default MintNow;
