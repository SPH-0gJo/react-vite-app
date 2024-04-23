import { Link } from 'react-router-dom';
import { AdminMenu } from 'shared/constants/types/types';
import { MenuTitle } from './AdminMenuBox';

export interface AdminMenuBoxNoSubMenusData {
  menuItem: AdminMenu;
}

export interface AdminMenuBoxNoSubMenusProps {
  data: AdminMenuBoxNoSubMenusData;
  isActive: boolean;
  onClick: (id: number) => void;
}

export const AdminMenuBoxNoSubMenus = (props: AdminMenuBoxNoSubMenusProps) => {
  const {
    data: { menuItem },
    isActive,
    onClick,
  } = props;

  const handleMenuClick = () => {
    onClick(menuItem.id);
  };

  return (
    <li onClick={handleMenuClick}>
      <MenuTitle $isActive={isActive}>
        <Link to={menuItem.link || ''}>{menuItem.name}</Link>
      </MenuTitle>
    </li>
  );
};
