import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

/* import Footer from '../components/Footer/Footer';
import LanguageBar from '../components/Footer/LanguageBar'; */
import NewFooter from '../components/Footer/NewFooter';
import Sidebar from '../components/Mobile/Sidebar';
import Navbar from '../components/Navbar/Navbar';
/* import NavMenu from '../components/Navbar/NavMenu'; */
import { useScrollBlock } from '../hooks/useScrollBlock';

const HomeLayout = (props: layoutType) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  let [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    blockScroll();
    allowScroll();
    props.hash &&
      scroller.scrollTo(props.hash.replace('#', ''), {
        duration: 2000,
        delay: 1000,
        smooth: 'easeInOutQuart',
      });
  });

  return (
    <div
      className={`lg:bg-black overflow-x-hidden relative ${
        sidebar ? 'bg-[rgb(15,19,29)]' : 'bg-[#14141F]'
      }`}
    >
      <div
        onClick={() => {
          sidebar && setSidebar(false);
          sidebar && allowScroll();
        }}
        className={`jamesjin-conainer ${
          sidebar
            ? 'ml-[260px] lg:ml-0 blur-[1px] grayscale-[50%] w-[115%]'
            : 'ml-0'
        } transition-all duration-200`}
      >
        {props.children}
      </div>

      <Navbar
        black
        page='LANDING'
        onNavClick={() => {
          setSidebar(false);
        }}
        onToggle={() => {
          sidebar ? allowScroll() : blockScroll();
          sidebar ? setSidebar(false) : setSidebar(true);
        }}
      />

      <Sidebar
        page='LANDING'
        sidebar={sidebar}
        set={(val: boolean) => {
          setSidebar(val);
          !val && allowScroll();
        }}
      />
      <NewFooter></NewFooter>
    </div>
  );
};

interface layoutType {
  children?: any;
  hash?: string | null;
}

export default HomeLayout;
