import React, { useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import { DropdownMenuBox, StyledCompProps } from 'shared/styles/styled/common';
import { IStyledComponent } from 'styled-components';

interface DropdownMenuProps {
  children?: React.ReactNode;
  StyleComponent?: IStyledComponent<'web', StyledCompProps>;
}

export const DropdownMenu = ({ children, StyleComponent = DropdownMenuBox }: DropdownMenuProps) => {
  const { show } = useContext(DropdownContext);

  return <StyleComponent $isActive={show}>{children}</StyleComponent>;
};
