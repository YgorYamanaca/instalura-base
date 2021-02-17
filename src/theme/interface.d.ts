import 'styled-components';
import ITypographyVariants from './typography';
import IColors from './colors';
import IBreakpoints from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors,
    readonly typography: ITypographyVariants,
    readonly breakpoints: IBreakpoints,
    readonly borderRadius: string,
    readonly transition: string,
    readonly fontFamily: string,
  }
}