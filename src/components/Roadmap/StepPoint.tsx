import GoldenText from '../Typhography/GoldenText';

const Point = (props: pointType) => {
  return (
    <div className='-translate-x-[10px] md:-translate-x-0 translate-y-[100px] md:-translate-y-0 '>
      <div className='w-[16px] h-[16px] rounded-full overflow-x-hidden bg-[#141414] md:-translate-y-[6px] relative after:absolute after:top-[4px] after:left-[4px] after:content-[""] after:w-[8px] after:h-[8px] after:rounded-full after:bg-gradient-to-b after:from-[#F2974A] after:to-[#F4E077]'></div>
      <p className='font-bold text-4 leading-[31px] pt-1 translate-x-[40px] sm:translate-x-[32px] md:translate-x-0'>
        <GoldenText>{props.text}</GoldenText>
      </p>
      <p className='text-[#A1A1A1] translate-x-[40px] sm:translate-x-[32px] md:translate-x-0 -translate-y-[50px] md:-translate-y-[85px] font-medium text-[11px] tracking-[1.1px] leading-[14px]'>
        {props.date}
      </p>
    </div>
  );
};

interface pointType {
  last?: boolean;
  date: string;
  text: string;
}

export default Point;
