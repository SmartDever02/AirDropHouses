import i18next from 'i18next';

const CheckBox = (props: checkboxType) => {
  const language = i18next.language;
  return (
    <div
      className={`flex items-center gap-[11px] text-white md:text-[16px] lg:text-[18px] leading-[31px] ${
        language === 'en' ? 'text-[16px]' : 'text-[18px]'
      }`}
    >
      <span
        className={`flex flex-none justify-center items-center w-[19px] h-[19px] rounded-[4px] ${
          props.checked
            ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
            : 'border-[2px] border-white'
        }`}
      >
        {props.checked && (
          <span className='-rotate-[40deg] -translate-y-[1px] border-l-[3px] border-b-[3px] w-[12px] h-[7px] border-l-white border-b-white' />
        )}
      </span>
      <span className='flex-auto pr-[30px]'>{props.children}</span>
    </div>
  );
};

interface checkboxType {
  checked?: boolean;
  children: any;
}

export default CheckBox;
