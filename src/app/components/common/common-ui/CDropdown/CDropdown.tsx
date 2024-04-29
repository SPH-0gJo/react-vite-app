import { useContext, useEffect, useState } from 'react';
import { DropdownBox } from 'shared/styles/styled/common';
import { DropdownContext } from 'app/components/common/common-ui/Dropdown/DropdownContext';
import { CDropdownContext } from './CDropdownContext';

interface CDropdownProps {
  children: React.ReactNode;
  dropdownId: string;
}

export const CDropdown = ({ children, dropdownId }: CDropdownProps) => {
  const { onToggle, openDropdownId } = useContext(CDropdownContext);

  const [show, setShow] = useState(false);
  const handleDropdownToggle = () => {
    onToggle(dropdownId);
  };

  useEffect(() => {
    const isSelfActive = openDropdownId === dropdownId;
    setShow(isSelfActive);
  }, [openDropdownId]);

  return (
    <DropdownBox className='dropdown-box' id={dropdownId}>
      <DropdownContext.Provider value={{ show, onToggle: handleDropdownToggle }}>{children}</DropdownContext.Provider>
    </DropdownBox>
  );
};
