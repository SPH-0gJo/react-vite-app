import { AdminAside } from 'app/components/pages/admin/aside/AdminAside';
import { AdminContents } from 'app/components/pages/admin/contents/AdminContents';
import { AdminHeader } from 'app/components/pages/admin/header/AdminHeader';
import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ isMenuOpen }) => (isMenuOpen ? '21.25rem 1fr' : '5rem 1fr')};
  //grid-template-columns: 21.25rem 1fr;
  grid-template-rows: 5.625rem 1fr;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-areas:
    'aside header'
    'aside content';
`;

export const Admin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <LandingPage isMenuOpen={isMenuOpen}>
      <AdminHeader onBurgerBtnClick={toggleMenu} />
      <AdminAside isMenuOpen={isMenuOpen} />
      <AdminContents>
        <Outlet />
      </AdminContents>
    </LandingPage>
  );
};
