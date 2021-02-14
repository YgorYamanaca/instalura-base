import 'styled-components';
import ITypographyVariants from './typography/interface';
import IColors from './colors/interface';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors,
    readonly typographyVariants: ITypographyVariants,
    readonly borderRadius: string,
    readonly transition: string,
    readonly fontFamily: string,
  }
}