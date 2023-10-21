import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { createContext, useContext, useMemo } from 'react'
import lightTheme from '../styles/theme/light'
import darkTheme from '../styles/theme/dark'
import React from 'react'

interface ThemeContextType {
  isLight: boolean
}
const ThemeContext = createContext<ThemeContextType>({ isLight: true })
const useThemeContext = () => useContext(ThemeContext)

interface ThemeProviderProps extends React.PropsWithChildren {
  isLight: boolean
}

const ThemeProvider = ({ children, isLight }: ThemeProviderProps) => {
  const theme = useMemo(() => (isLight ? lightTheme : darkTheme), [isLight])

  return (
    <ThemeContext.Provider
      value={{
        isLight,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export { useThemeContext, ThemeProvider }
