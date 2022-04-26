import GoldenText from '../Typhography/GoldenText';

const EtherInput = (props: etherType) => {
  return (
    <div className='EtherInput relative cursor-pointer select-none'>
      <div className='text-right w-[285px] sm:w-full md:w-[380px] lg:w-[300px] xl:w-[390px] 2xl:w-[470px] leading-[27px] md:leading-[44px] lg:leading-[30px] xl:leading-[36px] 2xl:leading-[44px] text-[15px] md:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-white font-bold border-t-none border-l-none border-r-none outline-none bg-transparent border-b-[1px] border-b-white'>
        {props.value + ' ' + props.priceType}
      </div>
      <div className='absolute top-0 left-0 font-bold text-[15px] md:text-[24px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'>
        <GoldenText>{props.preText}</GoldenText>
      </div>
    </div>
  );
};

interface etherType {
  value?: number | 0;
  preText: string;
  priceType: string;
}

export default EtherInput;
