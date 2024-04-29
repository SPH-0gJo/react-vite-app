import { createContext } from 'react';

interface CDropdownContextValue {
  openDropdownId: string;
  onToggle: (dropdownId: string) => void;
}

export const CDropdownContext = createContext<CDropdownContextValue>(null);
