const CheckBox = (props: propsType) => {
  return (
    <div className='flex items-center gap-[11px] text-white text-[18px] md:text-[16px] lg:text-[18px] leading-[31px]'>
      <span
        className={`flex justify-center items-center w-[16px] h-[16px] rounded-[4px] ${
          props.checked
            ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
            : 'border-[2px] border-white'
        }`}
      >
        {props.checked && (
          <span className='-rotate-[40deg] -translate-y-[1px] border-l-[3px] border-b-[3px] w-[12px] h-[7px] border-l-white border-b-white' />
        )}
      </span>
    </div>
  );
};

interface propsType {
  checked?: boolean;
}

export default CheckBox;
