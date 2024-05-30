import { Link } from 'react-router-dom';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { DropdownToggle } from '../Dropdown/DropdownToggle';
import { CDropdown } from './CDropdown';

export const CDropdownExample = () => (
  <CDropdown dropdownId={'dropdown-example'}>
    <DropdownToggle>Dropdown Button</DropdownToggle>
    <DropdownMenu>
      <Link to=''>Menu 1</Link>
      <Link to=''>Menu 2</Link>
    </DropdownMenu>
  </CDropdown>
);
