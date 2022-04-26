import GoldenText from '../Typhography/GoldenText';

const MintCard = (props: cardProp) => {
  return (
    <div className='bg-[#343444] w-[344px] lg:w-[260px] xl:w-[310px] 2xl:w-[333px] pt-[16px] xl:pt-[24px] 2xl:pt-[31px] pb-[12px] xl:pb-[20px] 2xl:pb-[26px] flex flex-col text-center justify-center rounded-[8px]'>
      <div className='font-bold text-[18px] lg:text-[16px] xl:text-[18px] leading-[28px]'>
        <GoldenText>{props.top}</GoldenText>
      </div>
      <div className='font-bold text-[32px] lg:text-[28px] xl:text-[32px] leading-[36px] pt-[6px] 2xl:pt-[8px]'>
        <GoldenText>{props.middle}</GoldenText>
      </div>
      <div className='text-white text-[14px] lg:text-[12px] xl:text-[14px] px-[40px] pt-[10px] 2xl:pt-[15px]'>
        {props.bottom}
      </div>
    </div>
  );
};

interface cardProp {
  top: string;
  middle: string;
  bottom: string;
}

export default MintCard;
