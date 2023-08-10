export interface Default {
  main: string
  opacity?: string
  light?: string
  dark?: string
  gradient?: string | []
  disabled?: string
}

export interface Text {
  main: string
  opacity: string
  highlight: string
  variant: string
  white: string
  black: string
}

export interface Palette {
  primary: Default
  secondary: Default
  text: Text
}

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette
    breakpoints: Breakpoints
  }
}
