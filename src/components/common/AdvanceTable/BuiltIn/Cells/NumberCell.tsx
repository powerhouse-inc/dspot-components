import styled from '@emotion/styled'
import React from 'react'
import BasicCell from './BasicCell'
import type { GenericCell, NumberCellExtraProps } from '../../types'
import { useThemeContext } from '../../../../../context/ThemeContext'
import { WithIsLight } from '../../../../../utils/typesHelpers'
import lightTheme from '../../../../../styles/theme/light'

interface NumberCellProps {
  cell: GenericCell
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const NumberCell: React.FC<NumberCellProps> = ({ cell, className, as }) => {
  const { isLight } = useThemeContext()
  const extra = cell.extraProps as NumberCellExtraProps

  return (
    <Cell
      className={className}
      as={as ?? (cell.isHeader ? 'th' : 'td')}
      isLight={isLight}
      cell={cell}
      isBold={extra?.isBold ?? false}
    />
  )
}

export default NumberCell

const Cell = styled(BasicCell)<WithIsLight & { isBold: boolean }>(
  ({ isLight, isBold }) => ({
    fontWeight: isBold ? 700 : 400,
    fontSize: 14,
    lineHeight: '17px',
    color: isLight ? '#231536' : '#FFFFFF',
    letterSpacing: 0.3,
    fontFeatureSettings: "'tnum' on, 'lnum' on",

    [lightTheme.breakpoints.up('desktop_1194')]: {
      fontSize: 16,
      lineHeight: '19px',
    },
  })
)
