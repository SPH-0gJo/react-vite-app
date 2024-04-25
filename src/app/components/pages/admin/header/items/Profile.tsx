import { Dropdown } from 'app/components/common/common-ui/Dropdown/Dropdown';
import { DropdownMenu } from 'app/components/common/common-ui/Dropdown/DropdownMenu';
import { DropdownToggle } from 'app/components/common/common-ui/Dropdown/DropdownToggle';
import { Link } from 'react-router-dom';
import { DropdownMenuBox } from 'shared/styles/styled/common';
import styled from 'styled-components';

const ProfileImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50% !important;
`;

const ProfileDropdownBox = styled(DropdownMenuBox)`
  inset: auto 0px auto auto;
`;

export const Profile = () => {
  return (
    <Dropdown>
      <DropdownToggle>
        <ProfileImg src='/assets/images/favicon.png' />
      </DropdownToggle>
      <DropdownMenu StyleComponent={ProfileDropdownBox}>
        <Link to=''>프로필</Link>
        <Link to=''>설정</Link>
      </DropdownMenu>
    </Dropdown>
  );
};
