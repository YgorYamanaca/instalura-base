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
// eslint-disable-next-line semi
}

export const colors: IColors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};
