import { useTranslation } from 'react-i18next';

import WalletButton from '../Buttons/WalletButton';
import Logo from '../Logo/logo';
import NavMenu from './NavMenu';

import data from '../../data/structure/landing.json';

import collapseIcon from '../../resources/images/landing/collapseIcon.svg';

const Navbar = (props: any) => {
  const { t } = useTranslation(['navbar']);

  return (
    <div className='fixed top-0 left-0 w-screen z-30'>
      <div
        className={`hidden w-full h-[88px] lg:h-[80px] border-b-[1px] border-b-[#373740] lg:flex items-center z-[100] ${
          props.black ? 'bg-black' : 'bg-[#151D31]'
        }`}
      >
        <div className='md:max-w-[780px] lg:max-w-[1100px] xl:max-w-[1350px] 2xl:max-w-[1480px] w-full items-center text-[28px] leading-[40px] font-bold text-white mx-auto flex justify-between'>
          <Logo page={props.page}>{t(data.logo.i18name)}</Logo>

          <NavMenu page={props.page} handleClick={() => props.onNavClick} />
          <WalletButton black={props.black} />
        </div>
      </div>
      <div className='w-full pl-[34px] md:pl-[82px] pr-[10px] sm:pr-[20px] md:pr-[40px] h-[78px] bg-[#151D31] text-lg leading-4 font-bold text-white flex lg:hidden items-center justify-between'>
        <button onClick={props.onToggle}>
          <img
            src={collapseIcon}
            className='w-[20px] sm:w-[30px] mr-[30px] md:mr-[70px]'
            alt='collapse'
          />
        </button>
        <Logo page={props.page}>
          <span className='sm: text-[12px]'>{t(data.logo.i18name)}</span>
        </Logo>
        <WalletButton black={props.black} />
      </div>
    </div>
  );
};
export default Navbar;
