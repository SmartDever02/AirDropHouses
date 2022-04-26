import { Transition } from '@headlessui/react';
import i18next from 'i18next';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../app/store';

import {
  setCoOper,
  setType,
  setTypeOpened,
} from '../../pages/utilities-sections/filterSlice';

import dropImage from '../../resources/images/utils/dropdown.svg';

const SingleSelector = (props: selectorType) => {
  const filters = useSelector((state: stateType) => state.filters);
  const { t } = useTranslation('utility');

  let [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const conditionDispatch = (condition: string, value: string) => {
    switch (condition) {
      case 'utilityType':
        dispatch(setType(value));
        break;
      case 'coOper':
        dispatch(setCoOper(value));
        break;
    }
  };

  const getFilter = (label: string) => {
    switch (label) {
      case 'utilityType':
        return filters.type;
      case 'coOper':
        return filters.coOper;
    }
  };

  const openOptions = () => {
    if (props.filter === 'utilityType') {
      dispatch(setTypeOpened(!filters.typeOpened));
      setIsOpen(!isOpen);
    }
    if (props.filter === 'coOper') {
      if (filters.typeOpened) {
        dispatch(setTypeOpened(false));
      } else {
        !filters.typeOpened && setIsOpen(!isOpen);
      }
    }
  };

  const outSideClick = () => {
    props.filter === 'utilityType'
      ? dispatch(setTypeOpened(false))
      : setIsOpen(false);
  };

  const language = i18next.language;

  const outside = (
    <div
      onClick={outSideClick}
      className='fixed top-0 left-0 w-screen h-screen'
    />
  );
  return (
    <>
      {props.filter === 'utilityType'
        ? filters.typeOpened && outside
        : isOpen && outside}
      <div
        onClick={() => !props.disabled && openOptions()}
        className={`${
          props.disabled
            ? 'text-gray-400 bg-gray-600 cursor-not-allowed'
            : 'bg-[#343444] text-white cursor-pointer'
        } ${
          language === 'en' ? 'md:min-w-[192px]' : 'md:min-w-[142px]'
        } relative transition-all duration-300 w-full md:w-fit h-[46px] rounded-t-[6px] text-[15px] leading-[24px] pl-[16px] pr-[13px] flex gap-[10px] items-center justify-between ${
          props.filter === 'utilityType'
            ? filters.typeOpened
              ? 'rounded-b-none'
              : 'rounded-b-[6px]'
            : isOpen
            ? 'rounded-b-none'
            : 'rounded-b-[6px]'
        }`}
      >
        {props.label}
        <img
          src={dropImage}
          alt='^'
          className={`${
            props.disabled ? 'opacity-40' : ''
          } transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
        <Transition
          as={Fragment}
          show={props.filter === 'utilityType' ? filters.typeOpened : isOpen}
          enter='transform transition duration-[200ms]'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transform duration-200 transition ease-in-out'
          leaveFrom='opacity-100 rotate-0 scale-100 '
          leaveTo='opacity-0 scale-95 '
        >
          <div
            className={`dropdown-menu shadow-md rounded-b-[6px] absolute left-0 w-full md:w-fit top-[46px] z-[2] ${
              language === 'en' ? 'md:min-w-[192px]' : 'md:min-w-[142px]'
            }`}
          >
            {props.data.map((one, index) => (
              <div
                onClick={() => {
                  conditionDispatch(props.filter, one);
                }}
                key={index}
                className={`h-[46px] ${
                  getFilter(props.filter) === one
                    ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077] text-[#343444]'
                    : 'bg-[#343444]'
                } flex items-center pl-[16px] last:rounded-b-[6px] hover:text-[#343444] hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077]`}
              >
                {t(one)}
              </div>
            ))}
          </div>
        </Transition>
      </div>
    </>
  );
};

interface selectorType {
  label: string;
  data: Array<string>;
  filter: string;
  disabled?: boolean;
}

export default SingleSelector;
