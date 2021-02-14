import { DefaultTheme } from "styled-components";
import { typography } from './typography';
import { colors } from './colors';

const theme: DefaultTheme = {
  colors,
  typography,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
}

export default theme