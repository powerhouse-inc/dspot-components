import styled from '@emotion/styled'
import React from 'react'
import BasicCell from './BasicCell'
import type { GenericCell } from '../../types'
import { useThemeContext } from '../../../../../context/ThemeContext'
import { WithIsLight } from '../../../../../utils/typesHelpers'
import lightTheme from '../../../../../styles/theme/light'

interface TextCellProps {
  cell: GenericCell
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const TextCell: React.FC<TextCellProps> = ({ cell, className, as }) => {
  const { isLight } = useThemeContext()

  return (
    <Cell
      className={className}
      as={as ?? (cell.isHeader ? 'th' : 'td')}
      isLight={isLight}
      cell={cell}
    />
  )
}

export default TextCell

const Cell = styled(BasicCell)<WithIsLight>(({ isLight }) => ({
  fontSize: 14,
  lineHeight: '17px',
  color: isLight ? '#231536' : '#FFFFFF',

  [lightTheme.breakpoints.up('desktop_1194')]: {
    fontSize: 16,
    lineHeight: '22px',
  },
}))
