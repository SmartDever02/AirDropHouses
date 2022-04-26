import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import NavItem from './Navitem';

import data from '../../data/structure/landing.json';

const NavMenu = (props: propsType) => {
  const { t } = useTranslation(['navbar']);
  const menu = data.navbar;

  return (
    <div
      className={`menubar flex text-white ${
        props.dropdown
          ? 'flex-col gap-[15px] md:gap-[5px] text-[18px] xl:text-[18px]'
          : 'flex-row gap-5 lg:gap-7 xl:gap-8 2xl:gap-12 text-[13px] xl:text-[18px]'
      }`}
    >
      {menu.map((one, index) => (
        <NavItem
          key={index}
          id={index}
          page={props.page}
          onClick={props.handleClick}
          to={one.to}
          Routing={one.ROUTING}
          active={one.to.search(props.page) !== -1}
        >
          {/* {t(one.text)} */}
          {t(one.i18name)}
        </NavItem>
      ))}
    </div>
  );
};

interface propsType {
  dropdown?: boolean;
  handleClick: any;
  page: string;
}
export default NavMenu;
