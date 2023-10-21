import styled from '@emotion/styled'
import React from 'react'
import { useThemeContext } from '../../../../../context/ThemeContext'
import { WithIsLight } from '../../../../../utils/typesHelpers'

interface AbstractCardProps extends React.PropsWithChildren {
  className?: string
}

const AbstractCard: React.FC<AbstractCardProps> = ({ children, className }) => {
  const { isLight } = useThemeContext()

  return (
    <Card className={className} isLight={isLight}>
      {children}
    </Card>
  )
}

export default AbstractCard

const Card = styled.div<WithIsLight>(({ isLight }) => ({
  background: isLight ? '#ffffff' : '#10191F',
  boxShadow: isLight
    ? '0px 20px 40px rgba(219, 227, 237, 0.4), 0px 1px 3px rgba(190, 190, 190, 0.25)'
    : '0px 20px 40px -40px rgba(7, 22, 40, 0.4), 0px 1px 3px rgba(30, 23, 23, 0.25)',
  borderRadius: 6,
}))
