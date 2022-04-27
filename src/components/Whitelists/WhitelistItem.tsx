import { Img } from 'react-image';

const WhitelistItem = (props: itemType) => {
  let loader = (
    <span
      className={`flex overflow-hidden justify-center items-center h-[70px] sm:h-[82px] bg-[#C4C4C4] rounded-[8px] ${
        props.index > 5 ? 'hidden md:block' : ''
      }`}
    />
  );
  try {
    let image = require('../../resources/images/landing/whitelists/' +
      props.image +
      '.svg');
    return (
      <div
        className={`h-[70px] sm:h-[82px] flex justify-center rounded-[12px] transition-all duration-300 ${
          props.link ? 'cursor-pointer hover:bg-white hover:bg-opacity-20' : ''
        }`}
        onClick={() => props.link && window.open(props.link, '_blank')}
      >
        <Img src={image} alt='*' loader={loader} />
      </div>
    );
  } catch {
    return loader;
  }
};

interface itemType {
  index: number;
  image: string;
  link: string;
}

export default WhitelistItem;
