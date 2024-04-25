import { createContext } from 'react';

interface DropdownContextValue {
  show: boolean;
  onToggle: () => void;
}

export const DropdownContext = createContext<DropdownContextValue>(null);
