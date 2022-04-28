import { Link } from 'react-router-dom';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import LanguageBar from '../Footer/LanguageBar';
import NavMenu from '../Navbar/NavMenu';

const Sidebar = (props: sidebarType) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <div
      className={`mobile-menu transition-all duration-200 lg:hidden fixed top-[78px] w-[260px] bg-[#14141F] h-screen pt-[26px] px-[24px] ${
        props.sidebar ? 'left-0' : '-left-[260px]'
      }`}
    >
      <div className='text-[18px] font-bold'>
        <NavMenu
          page={props.page}
          handleClick={() => {
            props.set(false);
          }}
          dropdown
        />
      </div>
      <hr className='w-full border-[#373740] mt-[21px] md:mt-[10px] lg:mt-[21px] mb-[23px] md:mb-[10px] lg:mb-[23px]' />
      <Link to='/' className='block font-bold text-[16px] text-white'>
        白皮書
      </Link>
      <Link
        to='/disclaimer'
        className={`${
          props.page === 'disclaimer'
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
            : ''
        } block font-bold text-[16px] text-white mt-[14px] md:mt-[10px] lg:mt-[14px] mb-[14px] md:mb-[10px] lg:mb-[14px]`}
      >
        免責申明
      </Link>
      <LanguageBar dropdown />
    </div>
  );
};

interface sidebarType {
  sidebar: boolean;
  set: any;
  page: string;
}

export default Sidebar;
