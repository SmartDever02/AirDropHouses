import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//import room images
import room1 from '../../resources/images/utilities/images/airdrop_houses/airdrop_houses_01_01.png';
import room2 from '../../resources/images/utilities/images/airdrop_houses/airdrop_houses_01_02.png';
import room3 from '../../resources/images/utilities/images/airdrop_houses/airdrop_houses_01_03.png';
import room4 from '../../resources/images/utilities/images/airdrop_houses/airdrop_houses_01_04.png';
import room5 from '../../resources/images/utilities/images/airdrop_houses/airdrop_houses_01_05.png';
import room6 from '../../resources/images/utilities/images/airdrop_houses/airdrop_houses_01_06.png';

const RoomCarousel = () => {
  return (
    <Carousel
      autoPlay
      swipeable
      interval={3000}
      transitionTime={1000}
      showIndicators={false}
      showStatus={false}
      showArrows={false}
    >
      <div>
        <img
          src={room1}
          alt='p1'
          className='rounded-[12px]'
          loading='lazy'
          draggable={false}
          width='645'
          height='645'
        />
      </div>
      <div>
        <img
          src={room2}
          alt='p2'
          className='rounded-[12px]'
          loading='lazy'
          draggable={false}
          width='645'
          height='645'
        />
      </div>
      <div>
        <img
          src={room3}
          alt='p3'
          className='rounded-[12px]'
          loading='lazy'
          draggable={false}
          width='645'
          height='645'
        />
      </div>
      <div>
        <img
          src={room4}
          alt='p4'
          className='rounded-[12px]'
          loading='lazy'
          draggable={false}
          width='645'
          height='645'
        />
      </div>
      <div>
        <img
          src={room5}
          alt='p5'
          className='rounded-[12px]'
          loading='lazy'
          draggable={false}
          width='645'
          height='645'
        />
      </div>
      <div>
        <img
          src={room6}
          alt='p6'
          className='rounded-[12px]'
          loading='lazy'
          draggable={false}
          width='645'
          height='645'
        />
      </div>
    </Carousel>
  );
};

export default RoomCarousel;
