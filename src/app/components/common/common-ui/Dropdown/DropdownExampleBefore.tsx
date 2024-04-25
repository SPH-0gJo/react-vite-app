import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Dropdown = styled.div`
  position: relative;
`;

//기본적인 것만 정의. 나머지(top 등)는 extends해서 설정하도록 함.
const DropdownMenu = styled.div`
  position: absolute;
  z-index: 1000;

  background-color: white;
  border: solid 1px black;

  a {
    display: block;
    /* DropdownMenu의 width에 맞추고, 없는 경우 가장 긴 문자 기준 */
    width: 100%;
    padding: 0.3rem 1.2rem;
  }
`;

//import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

export const DropdownExampleBefore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Dropdown>
      <button type='button' onClick={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <DropdownMenu>
          <Link to=''>프로필</Link>
          <Link to=''>설정</Link>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};
// button과 dropdown menu 레이아웃 조정
// button 토글시 열림 닫힘 기능 붙이기
