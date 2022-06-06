import { ToastContainer } from 'react-toastify';
import DetailPanel from '../../components/Mint/DetailPanel';
import MintForm from '../../components/Mint/MintForm';

const MintSection = () => {
  return (
    <div className='flex bg-[black] w-screen lg:h-screen pt-[78px] lg:pt-[80px] lg:pb-[80px]'>
      <div className='flex flex-col lg:flex-row items-center lg:-translate-y-[3vw] xl:-translate-y-0 2xl:-translate-y-[3vw] lg:-translate-x-[15vw] xl:-translate-x-[10vw] 2xl:-translate-x-[12vw] 3xl:-translate-x-[5vw] 3xl:mx-auto'>
        <div className='lg:w-[900px] lg:h-[465px] xl:w-[1000px] xl:h-[570px] 2xl:w-[1200px] 2xl:h-[630px]'>
          <video autoPlay muted loop>
            <source
              src={require('../../resources/images/landing/blind_box.mp4')}
              type='video/mp4'
            />
          </video>
        </div>
        <MintForm />
        <DetailPanel />
      </div>
      <ToastContainer />
    </div>
  );
};
export default MintSection;
