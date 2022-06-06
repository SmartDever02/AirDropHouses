const ButtonMore = (props: any) => {
  return (
    <button className='group rounded-full text-[15px] font-bold text-white w-[154px] h-[38px] bg-gradient-to-r from-[#F2974A] to-[#F4E077]'>
      <span className='group-hover:scale-110 transition-all duration-150'>
        {props.children}
      </span>
    </button>
  );
};

export default ButtonMore;
