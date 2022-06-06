import { Transition } from '@headlessui/react';
/* import { useSelector } from 'react-redux';
import { stateType } from '../app/store'; */
import CARD_DETAIL from '../components/Utilities/FilteredCards/CARD_DETAIL';
import SIMPLE_CARD from '../components/Utilities/FilteredCards/CARD_SIMPLE';
/* import config from '../config/config'; */
import metadata from '../data/structure/utility.json';
/* import getCompanyName from './getCompanyName'; */

/* const utilities = metadata.utilities; */
const utilities_data = metadata.data;

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

/* const notFound = (
  <div className='col-span-2 text-white text-[100px] md:text-[150px] font-semibold md:font-bold flex justify-center items-center'>
    (˚Δ˚)b
  </div>
); */

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

export const getAirDrop = (
  type: string,
  initDelay?: number,
  company?: string
) => {
  const filtered = utilities_data.filter(
    (data, index) =>
      (company === undefined ||
      company === 'coOper_label' ||
      data.company_name === company) && (data.type === type)
  );
  return (
    <>
      {filtered.map(
        (data, index) =>
          <TransitionWrapper
            key={index}
            index={initDelay ? index + initDelay : index}
          >
            <CARD_DETAIL
              index={index + 1}
              type={data.type}
              images={data.utility_images}
              content={data.content}
              title={data.title}
              details={data.details || []}
              public={data.public}
              winning_wallet={data.winning_wallet}
              date={data.date || ''}
              airdrop={data.airdrop || ''}
            />
          </TransitionWrapper>
      )}
      {/* {resultLength === 0 && notFound } */}
    </>
  );
};

export const getUtilities = (
  type: string,
  initDelay?: number,
  company?: string
) => {
  const filtered = utilities_data.filter(
    (data, index) =>
      (company === undefined ||
      company === 'coOper_label' ||
      data.company_name === company) && (data.type === type)
  );
  
  return (
    <>
      {filtered.map(
        (data, index) =>
          <TransitionWrapper
            key={index}
            index={initDelay ? index + initDelay : index}
          >
            <SIMPLE_CARD
              index={index + 1}
              type={type}
              data={data}
            />
          </TransitionWrapper>
    )}
    </>
  );
};