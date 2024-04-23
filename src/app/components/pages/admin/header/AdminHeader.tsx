import { Header } from 'shared/styles/styled/common';
import styled from 'styled-components';

interface AdminHeaderProps {
  setInputText?: (text: string | undefined) => void;
  onBurgerBtnClick: () => void;
}

const BurgerButton = styled.button`
  background: transparent;
  border: none;
  color: #313a46;
  // padding: 0 20px;
  display: inline-block;
  em {
    &:hover {
      color: var(--light-primary-origin);
    }
    transition: color 0.3s ease;
  }
`;

export const AdminHeader = (props: AdminHeaderProps) => {
  const { setInputText, onBurgerBtnClick } = props;
  return (
    <Header>
      <BurgerButton onClick={onBurgerBtnClick}>
        <em className='icon-burger-menu' />
      </BurgerButton>
      {/* {setInputText && <Search setInputText={(text) => setInputText(text)} />} */}
    </Header>
  );
};
