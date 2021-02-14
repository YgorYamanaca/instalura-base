import { DefaultTheme } from "styled-components";
import { typographyVariants } from './typography';
import { colors } from './colors';

const theme: DefaultTheme = {
  colors,
  typographyVariants,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
}

export default theme