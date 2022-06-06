import { Img } from 'react-image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import loader, { getNotFoundImage } from '../../../helpers/imageLoader';

const AirDropCarousel = ({ images, path, publicData }: carouselType) => {
  const getImage = (url: string) => {
    let img;
    try {
      img = require('../../../resources/images/utilities/images/' +
        path +
        '/' +
        url);
    } catch {}
    return img ? img : getNotFoundImage();
  };

  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
          <div
            onClick={clickHandler}
            className='absolute cursor-pointer top-1/2 -translate-y-[50%] w-[25px] h-[50px] rounded-r-full bg-black bg-opacity-[40%] z-10'
          >
            <span className='w-[12px] h-[12px] block bg-transparent border-l-[2px] border-b-[2px] rotate-[45deg] translate-x-1/2 translate-y-[18px]' />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext, labelNext) => (
          <div
            onClick={clickHandler}
            className='absolute cursor-pointer right-0 top-1/2 -translate-y-[50%] w-[25px] h-[50px] rounded-l-full bg-black bg-opacity-[40%] z-10'
          >
            <span className='w-[12px] h-[12px] block bg-transparent border-r-[2px] border-t-[2px] rotate-[45deg] translate-x-1/2 translate-y-[18px]' />
          </div>
        )}
      >
        {images.map((one) => (
          <Img
            key={one}
            src={getImage(one)}
            loader={loader}
            unloader={loader}
            className='rounded-[12px] xl:!w-[320px] 2xl:!w-[380px]'
          />
        ))}
      </Carousel>
      {publicData ?(
        <div
          className={`w-[200px] h-[36px] absolute left-1/2 bottom-[10px] -translate-x-[50%] rounded-[13px] text-[14px] font-bold flex justify-center items-center ${
            publicData.public
              ? 'bg-gradient-to-r from-[#F2974A] to-[#F4E077] text-black'
              : 'bg-[#7A798A] text-white'
          }`}
        >
          {publicData.text}
        </div>
      ): (<div></div>)}
    </>
  );
};

interface carouselType {
  images: Array<string>;
  path: string;
  publicData?: any;
}

export default AirDropCarousel;
