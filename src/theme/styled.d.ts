import 'styled-components';

interface IColor {
  main: {
    color?: string
    contrastText?: string
  }
  light?: {
    color?: string
    contrastText?: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    transition: string
    fontFamily: string
    colors: {
      primary: IColor
      secondary: IColor
      tertiary: IColor
      modes:{
        dark:{}
      }
      background: IColor
      borders: IColor
   }
  }
}