const Content = (props: contentType) => {
  return (
    <p
      className={`text-[12px] sm:text-[14px] xl:text-[18px] font-semibold text-white ${
        props.landing
          ? 'leading-[24px] sm:leading-[28px] md:leading-[30px] xl:leading-[40px] 2xl:leading-[44px] tracking-[1px] 3xl:text-[1vw]'
          : 'leading-[27.5px]'
      }`}
    >
      {props.children}
    </p>
  );
};

interface contentType {
  children?: any;
  landing?: boolean;
}

export default Content;
