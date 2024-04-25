import styled from 'styled-components';

export interface StyledProps {
  $isActive?: boolean;
  disabled?: boolean;
}

export interface StyledCompProps extends StyledProps {
  children?: React.ReactNode;
}

export const Header = styled.header`
  background-color: var(--white-a100);
  height: 3.625rem;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  grid-area: header;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.625rem 1.25rem;
  z-index: 999;
  em {
    font-size: 1.5rem;
    margin-right: 0.88rem;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  width: 36px;
`;

export const DropdownBox = styled.div`
  position: relative;
`;

//기본적인 것만 정의. 나머지(top 등)는 extends해서 설정하도록 함.
export const DropdownMenuBox = styled.div<StyledProps>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
  position: absolute;
  z-index: 1000;
  min-width: max-content;
  font-size: 1rem;

  background-color: white;
  border: solid 1px black;

  a {
    display: block;
    width: 100%; /* DropdownMenu의 width에 맞추고, 없는 경우 가장 긴 문자 기준 */
    padding: 0.3rem 1.2rem;
  }
`;
