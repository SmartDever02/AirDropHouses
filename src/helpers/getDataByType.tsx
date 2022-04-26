import { Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { stateType } from '../app/store';
import CARD_DETAIL from '../components/Utilities/FilteredCards/CARD_DETAIL';
import SIMPLE_CARD from '../components/Utilities/FilteredCards/CARD_SIMPLE';
import config from '../config/config';
import metadata from '../data/structure/utility.json';
import getCompanyName from './getCompanyName';

const utilities = metadata.utilities;

const delays = [
  'transition-opacity duration-[400ms] delay-[100ms]',
  'transition-opacity duration-[400ms] delay-[200ms]',
  'transition-opacity duration-[400ms] delay-[300ms]',
  'transition-opacity duration-[400ms] delay-[400ms]',
  'transition-opacity duration-[400ms] delay-[500ms]',
  'transition-opacity duration-[400ms] delay-[600ms]',
  'transition-opacity duration-[400ms] delay-[700ms]',
  'transition-opacity duration-[400ms] delay-[800ms]',
  'transition-opacity duration-[400ms] delay-[900ms]',
  'transition-opacity duration-[400ms] delay-[1000ms]',
  'transition-opacity duration-[400ms] delay-[1100ms]',
  'transition-opacity duration-[400ms] delay-[1200ms]',
  'transition-opacity duration-[400ms] delay-[1300ms]',
  'transition-opacity duration-[400ms] delay-[1400ms]',
  'transition-opacity duration-[400ms] delay-[1500ms]',
];

const TransitionWrapper = (props: any) => {
  return (
    <Transition
      appear
      show={true}
      enter={delays[props.index]}
      enterFrom='opacity-0'
      enterTo='opacity-100'
    >
      {props.children}
    </Transition>
  );
};

export const getAirDropHouses = (initDelay?: number) => {
  return (
    <>
      {utilities.airdrop_houses.data.map((data, index) => (
        <TransitionWrapper
          key={data.title}
          index={initDelay ? index + initDelay : index}
        >
          <CARD_DETAIL
            index={index + 1}
            type={utilities.airdrop_houses.type}
            data={data}
          />
        </TransitionWrapper>
      ))}
    </>
  );
};

export const getAirDropPay = (initDelay?: number) => {
  return (
    <>
      {utilities.airdrop_down_pay.data.map((data, index) => (
        <TransitionWrapper
          key={data.title}
          index={initDelay ? index + initDelay : index}
        >
          <CARD_DETAIL
            index={index + 1}
            type={utilities.airdrop_down_pay.type}
            data={data}
          />
        </TransitionWrapper>
      ))}
    </>
  );
};

export const getRealEstateDiscount = (initDelay?: number, company?: string) => {
  const red = utilities.real_estate_discount;
  const companies = red.partner;
  return (
    <>
      {red.data.map(
        (data, index) =>
          (company === undefined ||
            company === '' ||
            getCompanyName(company) === companies[index].company) && (
            <TransitionWrapper
              key={index}
              index={initDelay ? index + initDelay : index}
            >
              <SIMPLE_CARD
                index={index + 1}
                type={utilities.real_estate_discount.type}
                image={utilities.real_estate_discount.image}
                data={data}
                link={companies[index].link}
              />
            </TransitionWrapper>
          )
      )}
    </>
  );
};

export const getDedicatedService = (initDelay?: number, company?: string) => {
  const ds = utilities.dedicated_service;
  const companies = ds.partner;
  return (
    <>
      {ds.data.map(
        (data, index) =>
          (company === undefined ||
            company === '' ||
            getCompanyName(company) === companies[index].company) && (
            <TransitionWrapper
              key={index}
              index={initDelay ? index + initDelay : index}
            >
              <SIMPLE_CARD
                index={index + 1}
                type={utilities.dedicated_service.type}
                image={utilities.dedicated_service.image}
                data={data}
                link={companies[index].link}
              />
            </TransitionWrapper>
          )
      )}
    </>
  );
};

export const getOther = (initDelay?: number, company?: string) => {
  const other = utilities.other;
  const companies = other.partner;
  return (
    <>
      {other.data.map(
        (data, index) =>
          (company === undefined ||
            company === '' ||
            getCompanyName(company) === companies[index].company) && (
            <TransitionWrapper
              key={index}
              index={initDelay ? index + initDelay : index}
            >
              <SIMPLE_CARD
                index={index + 1}
                type={utilities.other.type}
                image={utilities.other.image}
                data={data}
                link={companies[index].link}
              />
            </TransitionWrapper>
          )
      )}
    </>
  );
};

export const getBankService = (initDelay?: number) => {
  return (
    <>
      {utilities.bank_service.data.map((data, index) => (
        <TransitionWrapper
          key={index}
          index={initDelay ? index + initDelay : index}
        >
          <SIMPLE_CARD
            index={index + 1}
            type={utilities.bank_service.type}
            image={utilities.bank_service.image}
            data={data}
          />
        </TransitionWrapper>
      ))}
    </>
  );
};
