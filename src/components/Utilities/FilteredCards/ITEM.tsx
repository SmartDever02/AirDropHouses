import { useTranslation } from 'react-i18next';

const ITEM = (props: itemType) => {
  const { t } = useTranslation(['utility']);
  return (
    <div className='h-[70px] lg:h-[50px] xl:h-[70px] 2xl:h-[80px]'>
      <p className='text-[#8A8AA0] text-[13px] leading-[28px]'>{t(props.title)}</p>
      <p className='text-white text-[15px] leading-[22px] font-bold'>
        {t(props.content)}
      </p>
    </div>
  );
};

interface itemType {
  title: string;
  content: string;
}

export default ITEM;
