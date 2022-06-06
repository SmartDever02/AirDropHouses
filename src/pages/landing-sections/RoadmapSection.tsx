import { useTranslation } from 'react-i18next';

import { Transition } from '@headlessui/react';
import { useState } from 'react';
import AppendText from '../../components/Roadmap/AppendText';
import CheckBox from '../../components/Roadmap/CheckBox';
import RoadBar from '../../components/Roadmap/RoadBar';
import RoadmapModal from '../../components/Modals/RoadmapModal';
/* import GoldenText from '../../components/Typhography/GoldenText'; */
import Gradient from '../../components/Typhography/GradientTitle';
import data from '../../data/structure/landing.json';
import i18next from 'i18next';

const RoadmapSection = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['landing']);
  const language = i18next.language;

  return (
    <section className='roadmap-section relative flex flex-col items-center justify-center pt-[50px] px-[5%] xl:px-0 w-full max-w-[1440px] mx-auto'>
      <Gradient>ROADMAP</Gradient>
      <RoadBar
        steps={[
          { date: '2022-3', text: '階段一' },
          { date: '2022-5', text: '階段二' },
          { date: '2022-5', text: '階段三' },
          { date: '2022-5', text: '階段四' },
        ]}
        value={40}
      />
      <div
        className={`absolute md:static md:pt-[50px]  ml-[22%] sm:ml-[17%] md:ml-0 md:mb-0 pl-[10%] md:pl-[4%] lg:pl-[6%] w-full flex flex-col md:flex-row gap-[90px] md:gap-0 md:justify-between ${
          language === 'en' ? 'pt-[140px]' : 'pt-[124px]'
        }`}
      >
        <div className='w-full md:w-[19%] lg:w-[20%] 2xl:w-[22%]'>
          <AppendText />
          <CheckBox checked>{t(data.roadmap.phase_1.list_1)}</CheckBox>
          <CheckBox checked>{t(data.roadmap.phase_1.list_2)}</CheckBox>
          <CheckBox checked>{t(data.roadmap.phase_1.list_3)}</CheckBox>
          <CheckBox checked>{t(data.roadmap.phase_1.list_4)}</CheckBox>
        </div>
        <div className='w-full md:w-[20%] lg:w-1/4'>
          <CheckBox checked>{t(data.roadmap.phase_2.list_1)}</CheckBox>
          <CheckBox checked>{t(data.roadmap.phase_2.list_2)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_2.list_3)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_2.list_4)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_2.list_5)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_2.list_6)}</CheckBox>
        </div>
        <div className='w-full md:w-[23%] lg:w-1/4'>
          <CheckBox>{t(data.roadmap.phase_3.list_1)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_2)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_3)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_4)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_5)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_6)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_7)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_8)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_9)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_3.list_10)}</CheckBox>
        </div>
        <div className='w-full md:w-[27%] lg:w-1/4'>
          {/* <CheckBox>
            <span
              onClick={() => setIsOpen(true)}
              className='cursor-pointer decoration-[#F2974A] underline decoration-1'
            >
              <GoldenText>{t(data.roadmap.phase_4.list_1)}</GoldenText>
            </span>
          </CheckBox> */}
          <CheckBox>{t(data.roadmap.phase_4.list_1)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_4.list_2)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_4.list_3)}</CheckBox>
          <CheckBox>{t(data.roadmap.phase_4.list_4)}</CheckBox>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='bg-black bg-opacity-50 fixed z-10 top-0 left-0 w-screen h-screen'
        ></div>
      )}
      <Transition
        show={isOpen}
        enter='duration-[400ms]'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='duration-[300ms]'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <RoadmapModal onClose={() => setIsOpen(false)} />
      </Transition>
    </section>
  );
};

export default RoadmapSection;
