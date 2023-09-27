import styled from '@emotion/styled';
import React from 'react';
import { buildBorderStyles } from '../utils';
import type { Border, BorderConfig, RowProps } from '../types';
import { useThemeContext } from '../../../../context/ThemeContext';
import { WithIsLight } from '../../../../utils/typesHelpers';

const DefaultTR: React.FC<RowProps & React.PropsWithChildren> = ({ children, ...rowProps }) => {
  const { isLight } = useThemeContext();

  if (rowProps.render) {
    return rowProps.render({
      ...rowProps,
      children,
    });
  }

  return (
    <BorderedTR border={rowProps.border ?? {}} isLight={isLight}>
      {children}
    </BorderedTR>
  );
};

export default DefaultTR;

const BorderedTR = styled.tr<WithIsLight & { border: BorderConfig | Border }>(({ border, isLight }) => ({
  ...buildBorderStyles(border, isLight),
}));
