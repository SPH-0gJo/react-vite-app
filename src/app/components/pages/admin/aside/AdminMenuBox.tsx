import { useLayoutEffect, useState } from 'react';
import { AdminMenu, AdminMenuItems } from 'shared/constants/types/types';
import styled from 'styled-components';
import { AdminSubMenuBox } from './AdminSubMenuBox';
import { StyledProps } from 'shared/styles/styled/common';

export const MenuTitle = styled.section<StyledProps>`
  color: ${(props) => (props.$isActive ? 'var(--dark-text-primary)' : 'var(--dark-text-secondary)')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  &:hover {
    color: var(--dark-text-primary);
  }
  em {
    font-size: 1.25rem;
    transform: ${(props) => (props.$isActive ? 'rotate(-90deg)' : 'rotate(90deg)')};
    transition: transform 0.3s ease;
  }
`;

const SubMenuItems = styled.ul<StyledProps>`
  color: var(--dark-text-secondary);
  text-shadow: 0px 1px 1px rgba(44, 44, 44, 0.02);
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  width: 17.5rem;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.625rem;
  background-color: var(--white-a4);
`;

interface AdminMenuBoxData {
  menuItem: AdminMenuItems;
}

interface AdminMenuProps {
  data: AdminMenuBoxData;
  activeMenu: number;
  onSubMenuClick: (id: number) => void;
}

export const AdminMenuBox = (props: AdminMenuProps) => {
  const [subMenuActivate, setSubMenuActivate] = useState(false);
  const [subMenus, setSubmenus] = useState<AdminMenu[] | undefined>(undefined);

  const { menuItem } = props.data;

  useLayoutEffect(() => {
    const { children } = menuItem;
    setSubmenus(children);
  }, []);

  return (
    <li>
      <MenuTitle $isActive={subMenuActivate} onClick={() => setSubMenuActivate(!subMenuActivate)}>
        <span>{menuItem.name}</span>
        {subMenus && <em className='icon-chevron-right-large' />}
      </MenuTitle>
      {subMenus && (
        <SubMenuItems $isActive={subMenuActivate}>
          {subMenus.map((e, index) => (
            <AdminSubMenuBox
              data={{ menuItem: e }}
              key={index}
              isActive={props.activeMenu === e.id}
              onClick={props.onSubMenuClick}
            />
          ))}
        </SubMenuItems>
      )}
    </li>
  );
};
