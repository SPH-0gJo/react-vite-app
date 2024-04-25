import { Link } from 'react-router-dom';
import { AdminMenuBoxNoSubMenusProps } from './AdminMenuBoxNoSubMenus';
import styled, { css } from 'styled-components';
import { StyledProps } from 'shared/styles/styled/common';

const SubMenuItem = styled.li<StyledProps>`
  cursor: pointer;
  &:hover {
    ${(props) =>
      !props.$isActive &&
      css`
        color: var(--dark-text-primary);
      `}
  }
  ${(props) =>
    props.$isActive &&
    css`
      color: var(--light-primary-origin);
    `}
`;

export const AdminSubMenuBox = (props: AdminMenuBoxNoSubMenusProps) => {
  const {
    data: { menuItem },
    onClick,
    isActive,
  } = props;

  const handleMenuClick = () => {
    onClick(menuItem.id);
  };

  return (
    <SubMenuItem className='subtitle' onClick={handleMenuClick} $isActive={isActive}>
      <Link to={menuItem.link || ''}>{menuItem.name}</Link>
    </SubMenuItem>
  );
};
