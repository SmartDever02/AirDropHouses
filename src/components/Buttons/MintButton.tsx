import { Link } from 'react-router-dom';
import walletIcon from '../../resources/images/landing/walletIcon.svg';
import walletIconOver from '../../resources/images/landing/walletIconOver.svg';
import GoldenText from '../Typhography/GoldenText';

const MintButton = (props: mintButtonType) => {
  return (
    <Link to='/mint'>
      <div className='group mt-[17px] bg-gradient-to-r from-[#F2974A] to-[#F4E077] pl-[1.3px] px-[1px] py-[1px] rounded-full'>
        <button
          className={`w-full py-[6px] sm:py-[9px] lg:py-[12px] rounded-full font-bold ${
            props.introduction ? 'bg-[#14141F]' : 'bg-[#14141F] lg:bg-black'
          } group-hover:bg-transparent`}
        >
          <div className='flex justify-center gap-[10px] items-center text-[15px]'>
            <img src={walletIcon} className='group-hover:hidden' alt='mint' />
            <img
              src={walletIconOver}
              className='hidden group-hover:block'
              alt='mint'
            />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]  group-hover:text-white group-hover:bg-inherit'>
              {props.children}
            </span>
          </div>
        </button>
      </div>
    </Link>
  );
};

interface mintButtonType {
  children: any;
  introduction?: boolean;
}

export default MintButton;
