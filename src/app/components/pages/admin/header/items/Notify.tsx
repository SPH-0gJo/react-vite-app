import { CDropdown } from 'app/components/common/common-ui/CDropdown/CDropdown';
import { Dropdown } from 'app/components/common/common-ui/Dropdown/Dropdown';
import { DropdownMenu } from 'app/components/common/common-ui/Dropdown/DropdownMenu';
import { DropdownToggle } from 'app/components/common/common-ui/Dropdown/DropdownToggle';
import { Link } from 'react-router-dom';

export const Notify = () => {
  return (
    <CDropdown dropdownId='dropdown-notify'>
      <DropdownToggle>
        <i className='icon-bell h6' />
      </DropdownToggle>
      <DropdownMenu>
        <Link to=''>알림 1</Link>
        <Link to=''>알림 2</Link>
      </DropdownMenu>
    </CDropdown>
  );
};
