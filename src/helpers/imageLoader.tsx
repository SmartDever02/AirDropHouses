import notFoundImage from '../resources/images/utilities/images/notFoundImage.svg';

let loader = (
  <div className='rounded-[12px] bg-slate-500 w-full flex items-center justify-center'>
    <div className='w-1/2 h-1/2 bg-white opacity-40 animate-ping rounded-full' />
  </div>
);

export function getNotFoundImage() {
  return notFoundImage;
}

export default loader;
