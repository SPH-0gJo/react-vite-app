import { Header, HeaderInner, HeaderItem, HeaderItems } from 'shared/styles/styled/common';
import styled from 'styled-components';
import { Profile } from './items/Profile';
import { Notify } from './items/Notify';

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

const AdminHeaderItems = styled(HeaderItems)`
  &.right-header-items > div {
    border-radius: 50% !important;
    border: 1px solid grey;
  }
`;

export const AdminHeader = (props: AdminHeaderProps) => {
  const { setInputText, onBurgerBtnClick } = props;
  return (
    <Header>
      <HeaderInner>
        <HeaderItems>
          <HeaderItem>
            <BurgerButton onClick={onBurgerBtnClick}>
              <em className='icon-burger-menu' />
            </BurgerButton>
          </HeaderItem>
          {/* {setInputText && <Search setInputText={(text) => setInputText(text)} />} */}
        </HeaderItems>
        <AdminHeaderItems className='right-header-items'>
          <HeaderItem>
            <Notify />
          </HeaderItem>
          <HeaderItem>
            <Profile />
          </HeaderItem>
        </AdminHeaderItems>
      </HeaderInner>
    </Header>
  );
};
