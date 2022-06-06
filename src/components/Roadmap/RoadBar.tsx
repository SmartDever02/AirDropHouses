import Point from './StepPoint';

const RoadBar = (props: roadBarType) => {
  return (
    <div className='bg-transparent border-l-[4px] md:border-0 border-[#292929] md:bg-[#292929] h-[1220px] w-full md:h-[4px] rounded-sm md:mt-[124px] ml-[15%] md:ml-0 md:pl-[4%] lg:pl-[6%] md:pr-[20%] lg:pr-[17%] -translate-y-[25px]'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <Point text={props.steps[0].text} date={props.steps[0].date} />
        </div>
        <div className='mt-[180px] md:mt-0'>
          <Point text={props.steps[1].text} date={props.steps[1].date} />
        </div>
        <div className='mt-[210px] md:mt-0'>
          <Point text={props.steps[2].text} date={props.steps[2].date} />
        </div>
        <div className='mt-[335px] md:mt-0'>
          <Point text={props.steps[3].text} date={props.steps[3].date} last />
        </div>
        <span
          className='hidden md:block absolute bg-gradient-to-r from-[#EEB41E] via-[#FCD441] to-[#FED947] rounded-full translate-x-[7px] h-1'
          style={{ width: props.value + '%' }}
        />
        <span
          className='block md:hidden absolute bg-gradient-to-r from-[#EEB41E] via-[#FCD441] to-[#FED947] rounded-full w-1 top-[28.5vw] sm:top-[26vw] -left-[1vw]'
          style={{ height: props.value * 1 + '%' }}
        />
      </div>
    </div>
  );
};

interface stepType {
  date: string;
  text: string;
}

interface roadBarType {
  steps: Array<stepType>;
  value: number;
}

export default RoadBar;
