import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'

import { theme } from './theme'
import React from 'react'

type ProviderThemeProps = {
  children: React.ReactNode
}

export function ProviderTheme(props: ProviderThemeProps) {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
