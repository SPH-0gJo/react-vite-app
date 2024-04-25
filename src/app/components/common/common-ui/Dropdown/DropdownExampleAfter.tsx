import { Dropdown } from 'app/components/common/common-ui/Dropdown/Dropdown';
import { DropdownMenu } from 'app/components/common/common-ui/Dropdown/DropdownMenu';
import { DropdownToggle } from 'app/components/common/common-ui/Dropdown/DropdownToggle';
import { Link } from 'react-router-dom';

export const DropdownExampleAfter = () => {
  return (
    <Dropdown>
      <DropdownToggle />
      <DropdownMenu>
        <Link to=''>프로필</Link>
        <Link to=''>설정</Link>
      </DropdownMenu>
    </Dropdown>
  );
};
