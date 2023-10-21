import styled from '@emotion/styled'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import {
  EXPENSES_COMPARISON_TABLE_HEADER,
  EXPENSES_COMPARISON_TABLE_HEADER_WITHOUT_OFF_CHAIN,
} from './headers'
import { useThemeContext } from '../../context/ThemeContext'
import { WithIsLight } from '../../utils/typesHelpers'
import { RowProps } from '../common/AdvanceTable/types'
import AdvanceTable from '../common/AdvanceTable/AdvanceTable'

interface ExpensesComparisonProps {
  rows: RowProps[]
  hasOffChainData: boolean
}

const ExpensesComparison: React.FC<ExpensesComparisonProps> = ({
  rows,
  hasOffChainData,
}) => {
  const { isLight } = useThemeContext()

  return (
    <div>
      <SectionHeader
        title="Reported Expenses Comparison"
        subtitle={
          'Reported actuals compared to expense and revenue transactions.'
        }
        tooltip={
          'Understand the differences between reported and net transactions. Easily spot variations \
          and improve financial tracking for comprehensive expense  and revenue analysis.'
        }
      />

      <TableWrapper>
        <StyledTable
          isLight={isLight}
          header={
            hasOffChainData
              ? EXPENSES_COMPARISON_TABLE_HEADER
              : EXPENSES_COMPARISON_TABLE_HEADER_WITHOUT_OFF_CHAIN
          }
          body={rows}
        />
      </TableWrapper>
    </div>
  )
}

export default ExpensesComparison

const TableWrapper = styled.div({
  marginTop: 24,
})

const StyledTable = styled(AdvanceTable)<WithIsLight>(({ isLight }) => ({
  background: isLight ? '#FFFFFF' : '#1E2C37',
}))
