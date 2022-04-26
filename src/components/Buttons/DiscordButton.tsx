import discordIcon from '../../resources/images/landing/discordIcon.svg';
import discordIconOver from '../../resources/images/landing/discordIconOver.svg';

const DiscordButton = (props: discordType) => {
  return (
    <div className='group mx-auto lg:mx-0 w-fit bg-gradient-to-r from-[#F2974A] to-[#F4E077] p-[1px] rounded-full'>
      <button
        className={`${
          props.exception ? 'bg-[#343444]' : 'bg-[#14141F] lg:bg-black'
        } group-hover:bg-transparent px-9 py-2 md:py-3 rounded-full text-white font-bold text-[14px] sm:text-[15px] leading-[22px]`}
      >
        <div className='flex gap-[10px] items-center'>
          <img src={discordIcon} alt='discord' className='group-hover:hidden' />
          <img
            src={discordIconOver}
            alt='discord'
            className='hidden group-hover:block'
          />

          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077] group-hover:text-white group-hover:bg-inherit'>
            {props.children}
          </span>
        </div>
      </button>
    </div>
  );
};

interface discordType {
  children: string;
  exception?: boolean;
}

export default DiscordButton;
