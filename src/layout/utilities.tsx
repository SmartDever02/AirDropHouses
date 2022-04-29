import { useEffect, useState } from 'react';
import NewFooter from '../components/Footer/NewFooter';
import Sidebar from '../components/Mobile/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useScrollBlock } from '../hooks/useScrollBlock';

const UtilityLayout = (props: any) => {
  const [blockScroll, allowScroll] = useScrollBlock();
  let [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    blockScroll();
    allowScroll();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='James-Utility overflow-x-hidden'>
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
        page='utilities'
        onToggle={() => {
          sidebar ? allowScroll() : blockScroll();
          sidebar ? setSidebar(false) : setSidebar(true);
        }}
      />
      <Sidebar
        page='utilities'
        sidebar={sidebar}
        set={(val: boolean) => setSidebar(val)}
      />
      <NewFooter />
    </div>
  );
};
export default UtilityLayout;
