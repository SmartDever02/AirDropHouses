import GoldenText from './GoldenText';

const Gradient = (props: gradientType) => {
  return (
    <span className={`flex ${!props.landing && 'justify-center'}`}>
      <h3
        className={`text-[21px] sm:text-[24px] md:text-[36px] lg:text-[34px] xl:text-[36px] font-bold ${
          props.landing
            ? 'pb-[15px] md:leading-[68px] 3xl:text-[2vw]'
            : 'leading-[38px] md:leading-[44px]'
        }`}
      >
        <GoldenText>{props.children}</GoldenText>
      </h3>
    </span>
  );
};

interface gradientType {
  children: any;
  landing?: boolean;
}

export default Gradient;
