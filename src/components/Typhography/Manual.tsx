const MTitle = (props: mTitleType) => {
  return (
    <h3
      className={`text-[18px] md:text-[24px] leading-[30px] md:leading-[40px] ${
        props.red
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D23838] to-[#E78B88]'
          : 'text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
      } `}
    >
      {props.children}
    </h3>
  );
};

interface mTitleType {
  children: any;
  red?: boolean;
}

export default MTitle;
