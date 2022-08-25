import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logoImage from '../../resources/logo/logo.svg';
import i18next from 'i18next';
console.log(i18next.language)

const Logo = (props: logoType) => {
  const content = (
    <>
      <img
        src={logoImage}
        className='w-[35px] sm:w-[40px] md:w-[50px]'
        alt='Logo'
      ></img>
      <span className={`logoTitle font-normal ml-[10px] text-[20px] ${i18next.language === 'ts' ? 'md:text-[24px] lg:text-[28px] xl:text-[32px]' : 'xl:text-[20px]'} leading-[30px] md:leading-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]`}>
        {props.children}
      </span>
    </>
  );
  if (props.page === 'LANDING') {
    return (
      <ScrollLink
        smooth={true}
        duration={500}
        to='home'
        className='flex items-center cursor-pointer'
      >
        {content}
      </ScrollLink>
    );
  }
  return (
    <Link to='/' className='flex items-center cursor-pointer'>
      {content}
    </Link>
  );
};

interface logoType {
  children: any;
  page: string;
}
export default Logo;
