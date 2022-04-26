import GoldenText from '../Typhography/GoldenText';

const DetailButton = (props: any) => {
  return (
    <div className='group mx-auto w-full lg:mx-0 bg-gradient-to-r from-[#F2974A] to-[#F4E077] p-[1px] rounded-full'>
      <button className='bg-[#14141F] px-9 py-2 w-full md:py-3 rounded-full text-white font-bold text-[14px] sm:text-[15px] leading-[22px]'>
        <div className='flex justify-center gap-[10px] items-center group-hover:scale-110 transition-all duration-150'>
          <GoldenText>{props.children}</GoldenText>
        </div>
      </button>
    </div>
  );
};

export default DetailButton;
