/* import { scroller } from 'react-scroll'; */
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
/* import { useScrollBlock } from '../../hooks/useScrollBlock'; */

const NavItem = (props: ItemType) => {
  /* const [blockScroll, allowScroll] = useScrollBlock(); */

  const handleClick = () => {
    props.onClick();
  };
  if (props.page === 'LANDING') {
    return props.Routing ? (
      props.target ? (
        <a
          target='_blank'
          href={props.to}
          rel='noreferrer'
          className='cursor-pointer text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077] transition-all'
        >
          {props.children}
        </a>
      ) : (
        <Link
          // onClick={() => {
          //   alert('allowed');
          //   allowScroll();
          // }}
          to={props.to}
          className='cursor-pointer text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077] transition-all'
        >
          {props.children}
        </Link>
      )
    ) : (
      <ScrollLink
        onClick={handleClick}
        className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077]'
        activeClass='text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
        to={props.to}
        spy={true}
        hashSpy={props.id !== 0 && true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        {props.children}
      </ScrollLink>
    );
  }
  return props.Routing ? (
    props.target ? (
      <a
        target='_blank'
        href={props.to}
        rel='noreferrer'
        className={`cursor-pointer transition-all ${
          props.active
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
            : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077]'
        }`}
      >
        {props.children}
      </a>
    ) : (
      <Link
        to={props.to}
        className={`cursor-pointer transition-all ${
          props.active
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#F2974A] to-[#F4E077]'
            : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077]'
        }`}
      >
        {props.children}
      </Link>
    )
  ) : (
    <Link
      to={'/#' + props.to}
      className='cursor-pointer text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F2974A] hover:to-[#F4E077] transition-all'
    >
      {props.children}
    </Link>
  );
};

interface ItemType {
  children?: any;
  active?: boolean;
  id: number;
  page: string;
  Routing?: boolean;
  target?: boolean;
  to: string;
  onClick?: any;
}

export default NavItem;
