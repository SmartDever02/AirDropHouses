const FooterText = (props: any) => {
  return (
    <span className='uppercase text-[16px] sm:text-[18px] leading-[26px] text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'>
      {props.children}
    </span>
  );
};
export default FooterText;
