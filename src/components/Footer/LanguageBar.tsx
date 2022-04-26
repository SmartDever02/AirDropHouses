import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import i18next from 'i18next';

import dropdown from '../../resources/images/utils/dropdown.svg';
import { getFullName } from '../../helpers/multilanguage';

const languages = [
  { name: '繁體中文', value: 'ts' },
  { name: 'ENGLISH', value: 'en' },
];

interface propsType {
  dropdown?: boolean;
}

const LanguageBar = (props: propsType) => {
  let [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18next.language;
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed top-0 left-0 w-screen h-screen'
        />
      )}

      <div className='LanguageBar font-bold text-white'>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='w-[127px] h-[44px] rounded-[4px] bg-[#43434C] pl-[22px] pr-[14px] flex justify-between items-center cursor-pointer'
        >
          <span className='font-bold text-[14px] leading-[26px]'>
            {getFullName(i18next.language)}
          </span>
          <img src={dropdown} alt='^' className='w-[12px]' />
        </div>
        <Transition
          as={Fragment}
          show={isOpen}
          enter='transform transition duration-[200ms]'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transform duration-200 transition ease-in-out'
          leaveFrom='opacity-100 rotate-0 scale-100 '
          leaveTo='opacity-0 scale-95 '
        >
          <div
            className={`w-[127px] absolute ${
              props.dropdown ? '' : '-translate-y-[150%]'
            }`}
          >
            {languages.map((one, index) => {
              return (
                <div
                  key={index}
                  className={`cursor-pointer pl-[16.42px] text-[16px] leading-[24px] flex items-center h-[44px] first:rounded-t-[4px] hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077] hover:text-[#343444] ${
                    currentLanguage === one.value
                      ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077] text-[#343444]'
                      : 'bg-[#343444]'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    i18next.changeLanguage(languages[index].value);
                  }}
                >
                  {one.name}
                </div>
              );
            })}
          </div>
        </Transition>
      </div>
    </>
  );
};

export default LanguageBar;
