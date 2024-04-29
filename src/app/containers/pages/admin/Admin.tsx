import { CDropdownContext } from 'app/components/common/common-ui/CDropdown/CDropdownContext';
import { AdminAside } from 'app/components/pages/admin/aside/AdminAside';
import { AdminContents } from 'app/components/pages/admin/contents/AdminContents';
import { AdminHeader } from 'app/components/pages/admin/header/AdminHeader';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MENU_ITEMS } from 'shared/constants/variables';
import styled from 'styled-components';

const LandingPage = styled.div<{ $isMenuOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ $isMenuOpen }) => ($isMenuOpen ? '21.25rem 1fr' : '5rem 1fr')};
  grid-template-rows: 3.625rem 1fr;
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

  //custom hook으로 변경하면 좋을 것 같다...

  const [openDropdownId, setOpenDropdownId] = useState<string>(null);

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdownId((prevDropdownId) => (prevDropdownId === dropdownId ? null : dropdownId));
  };

  useEffect(() => {
    // dropdown 바깥을 클릭했을 때 dropdown을 닫기 위한 이벤트 리스너 추가
    const handleClickOutside = (event) => {
      if (
        openDropdownId &&
        !document.getElementById(openDropdownId).contains(event.target) &&
        !event.target.closest('.dropdown-box')
      ) {
        setOpenDropdownId(null);
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener('mousedown', handleClickOutside);

    // openDropdownId 변경으로 재실행시, effect 함수 살향 이전에 기존 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]);

  return (
    <CDropdownContext.Provider value={{ openDropdownId, onToggle: toggleDropdown }}>
      <LandingPage $isMenuOpen={isMenuOpen}>
        <AdminHeader onBurgerBtnClick={toggleMenu} />
        <AdminAside isMenuOpen={isMenuOpen} data={{ menuItems: MENU_ITEMS }} />
        <AdminContents>
          <Outlet />
        </AdminContents>
      </LandingPage>
    </CDropdownContext.Provider>
  );
};
