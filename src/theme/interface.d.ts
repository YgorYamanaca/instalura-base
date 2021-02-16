import 'styled-components';
import ITypographyVariants from './typography/interface';
import IColors from './colors/interface';
import IBreakpoints from './breakpoints/interface';

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