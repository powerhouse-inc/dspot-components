import React from 'react'
import { ThemeProvider } from '../../context/ThemeContext'

export const withThemeContext = (isLight: boolean) => (Story) => {
  return (
    <ThemeProvider isLight={isLight}>
      <Story />
    </ThemeProvider>
  )
}
