import { useTranslation } from 'react-i18next';
import useSaleMode from '../../hooks/useSaleMode';

const MintNow = (props: any) => {
  const saleMode = useSaleMode();
  const { t } = useTranslation(['minting']);
  return (
    <button
      onClick={() => {
        props.clickHandle();
      }}
      className={`w-full h-[29px] md:h-[46px] rounded-[8px] ${
        saleMode !== 'before'
          ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077] hover:from-[#F4E077] hover:to-[#F2974A]'
          : 'bg-[#A9A9A9]'
      } text-center text-white font-bold`}
      disabled={saleMode === 'before'}
    >
      {t('mint')}
    </button>
  );
};

export default MintNow;
