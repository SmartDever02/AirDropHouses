import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const Disclosure = (props: propsType) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className='cursor-pointer transition-all duration-300 w-full rounded-[4.5px] bg-transparent border-[1px] border-[#474366] py-[12px] md:py-[29px] px-[9.2px] md:px-[35px]'
    >
      <div className='flex justify-between'>
        <div className='w-[90%] font-bold text-[16px] md:text-[18px] md:leading-[24px] text-white'>
          {props.title}
        </div>
        <span
          className={`w-[25px] h-[25px] rounded-full flex justify-center items-center ${
            open ? 'bg-[#D0D0D2]' : 'bg-[#474366]'
          }`}
        >
          <ChevronUpIcon
            className={`${
              open ? 'transform rotate-180' : ''
            } w-5 h-5 text-purple-500 transition-all duration-300 translate-x-[1px]`}
          />
        </span>
      </div>
      <Transition
        show={open}
        enter='transition duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='mt-[10px] font-normal text-[14px] leading-[28px] md:text-[18px] md:leading-[36px] text-white pr-0 lg:pr-[170px]'>
          {props.content}
        </div>
      </Transition>
    </div>
  );
};

interface propsType {
  title: string;
  content: string;
}

export default Disclosure;
