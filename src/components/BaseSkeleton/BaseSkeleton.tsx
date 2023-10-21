import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'
import { WithIsLight } from '../../utils/typesHelpers'

export const BaseSkeleton = styled(Skeleton)<WithIsLight>(({ isLight }) => ({
  background: isLight ? '#ECF1F3' : '#31424E',
  width: '100%',
  borderRadius: 25,
  transform: 'scale(1)',
}))
