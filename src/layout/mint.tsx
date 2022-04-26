import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import NewFooter from '../components/Footer/NewFooter';
import Sidebar from '../components/Mobile/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useScrollBlock } from '../hooks/useScrollBlock';

const MintLayout = (props: any) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  let [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    blockScroll();
    allowScroll();
  }, []);
  return (
    <div className='JamesJin-Mint overflow-x-hidden'>
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
        page='mint'
        onToggle={() => {
          sidebar ? allowScroll() : blockScroll();
          sidebar ? setSidebar(false) : setSidebar(true);
        }}
      />
      <Sidebar
        page='mint'
        sidebar={sidebar}
        set={(val: boolean) => setSidebar(val)}
      />
      <NewFooter />
    </div>
  );
};
export default MintLayout;
