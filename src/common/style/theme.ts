import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#fafafa'
    },
    secondary: {
      main: '#5e45ff'
    },
    text: {
      main: '#222222',
      opacity: '#616161',
      highlight: '#E84393',
      variant: '#8368FF',
      white: '#FAFAFA',
      black: '#000000'
    }
  },
  breakpoints: {
    xs: 320,
    sm: 480,
    md: 768,
    lg: 1024
  }
}
