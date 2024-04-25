import { useState } from 'react';
import { DropdownBox } from 'shared/styles/styled/common';
import { DropdownContext } from './DropdownContext';

interface DropdownProps {
  children: React.ReactNode;
}

export const Dropdown = ({ children }: DropdownProps) => {
  const [show, setShow] = useState(false);
  const handleDropdownToggle = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <DropdownBox>
      <DropdownContext.Provider value={{ show, onToggle: handleDropdownToggle }}>{children}</DropdownContext.Provider>
    </DropdownBox>
  );
};
