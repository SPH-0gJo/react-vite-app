import { useNavigate } from 'react-router-dom';
import { AdminMenuItems } from 'shared/constants/types/types';
import styled from 'styled-components';
import { AdminMenuBox } from './AdminMenuBox';
import { useCallback, useLayoutEffect, useState } from 'react';
import { AdminMenuBoxNoSubMenus } from './AdminMenuBoxNoSubMenus';

const Aside = styled.aside`
  font-family: var(--font-primary);
  background: var(--dark-surface-level-2);
  grid-area: aside;
  padding: 0 1.875rem 1.4375rem 1.875rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const AsideHeader = styled.div`
  cursor: pointer;
  height: 5.625rem;
  color: var(--dark-text-primary);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuItemBar = styled.div`
  overflow-y: auto;
  flex: 1;
  overflow-y: auto;
`;

const MenuItems = styled.ul`
  text-shadow: 0px 1px 1px rgba(44, 44, 44, 0.02);
`;

const AsideFooter = styled.div`
  color: var(--dark-text-secondary);
  padding: 1.25rem;
  margin-top: auto;
`;

interface AdminAsideData {
  menuItems: AdminMenuItems[];
}

interface AdminAsideProps {
  isMenuOpen: boolean;
  data: AdminAsideData;
}

const getHasSubMenus = function (menuItem: AdminMenuItems) {
  const { children } = menuItem;
  // children이 빈 배열인 경우
  if (Array.isArray(children) && !children.length) {
    return false;
  }
  return !!children;
};

export const AdminAside = ({ isMenuOpen, data: { menuItems } }: AdminAsideProps) => {
  const navigator = useNavigate();
  //const { menuItems } = props.data;
  const [activeMenu, setActiveMenu] = useState<number>(null);

  useLayoutEffect(() => {
    if (menuItems.length > 0) {
      setActiveMenu(menuItems[0].id);
    }
  }, [menuItems]);

  const handleMenuBoxNoSubMenusClick = useCallback((id: number) => {
    setActiveMenu(id);
  }, []);

  return (
    <Aside>
      <AsideHeader onClick={() => navigator('/')}>
        {isMenuOpen && <img src='/assets/images/logo.svg' alt='Logo' />}
        {/* <span>GEOLAB</span> */}
      </AsideHeader>
      {isMenuOpen && (
        <MenuItemBar>
          <MenuItems className={'h6'}>
            {menuItems.map((menuItem) => {
              const { id } = menuItem;
              if (!getHasSubMenus(menuItem)) {
                return (
                  <AdminMenuBoxNoSubMenus
                    data={{ menuItem }}
                    key={id}
                    isActive={activeMenu === id}
                    onClick={handleMenuBoxNoSubMenusClick}
                  />
                );
              }
              return (
                <AdminMenuBox
                  data={{ menuItem }}
                  key={id}
                  activeMenu={activeMenu}
                  onSubMenuClick={handleMenuBoxNoSubMenusClick}
                />
              );
            })}
          </MenuItems>
        </MenuItemBar>
      )}
      {isMenuOpen && (
        <AsideFooter className={'caption'}>
          <p>담당자:&nbsp;유경수</p>
          <p>전화:&nbsp;02-785-9910</p>
          <p>메일:&nbsp;help@sphinfo.com</p>
          <p>&copy;&nbsp;SPH,&nbsp;Inc.&nbsp;All&nbsp;Rights&nbsp;Reserved.</p>
        </AsideFooter>
      )}
    </Aside>
  );
};
