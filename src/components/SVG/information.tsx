import styled from '@emotion/styled'
import * as React from 'react'
import { useThemeContext } from '../../context/ThemeContext'

interface Props {
  width?: number
  height?: number
  style?: React.CSSProperties
}

const Information: React.FC<Props> = ({
  height = 15,
  width = 15,
  style,
  ...props
}) => {
  const { isLight } = useThemeContext()
  return (
    <ContainerSVG
      style={style}
      isLight={isLight}
      width={height}
      height={width}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="mark"
        className="mark"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.5c-3.107 0-6 2.893-6 6s2.893 6 6 6 6-2.893 6-6-2.893-6-6-6zm-7.5 6a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
      />
      <path d="M8 12a.75.75 0 01-.75-.75V7.5a.75.75 0 011.5 0v3.75A.75.75 0 018 12zM8 5.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </ContainerSVG>
  )
}

export default Information

const ContainerSVG = styled.svg<{ isLight?: boolean }>(({ isLight }) => ({
  fill: isLight ? '#9FAFB9' : '#787A9B',
  ':hover': {
    fill: '#447AFB',
  },
}))
