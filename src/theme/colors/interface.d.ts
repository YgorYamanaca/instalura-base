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

export default interface IColors {
  primary: IColor
  secondary: IColor
  tertiary: IColor
  modes:{
    dark:{}
  }
  background: IColor
  borders: IColor
}
