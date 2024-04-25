import { Dropdown } from 'app/components/common/common-ui/Dropdown/Dropdown';
import { DropdownMenu } from 'app/components/common/common-ui/Dropdown/DropdownMenu';
import { DropdownToggle } from 'app/components/common/common-ui/Dropdown/DropdownToggle';

export const Notify = () => {
  return (
    <Dropdown>
      <DropdownToggle>
        <i className='icon-bell h6' />
      </DropdownToggle>
      <DropdownMenu></DropdownMenu>
    </Dropdown>
  );
};
