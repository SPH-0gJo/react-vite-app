import { useContext } from 'react';
import { DropdownContext } from './DropdownContext';

interface DropdownToggleProps {
  children?: React.ReactNode;
}

export const DropdownToggle = ({ children }: DropdownToggleProps) => {
  const { onToggle } = useContext(DropdownContext);

  //button style 공통속성임..
  return (
    <button
      type='button'
      onClick={onToggle}
      style={{ border: '1px solid transparent', backgroundColor: 'transparent' }}
    >
      {children}
    </button>
  );
};
