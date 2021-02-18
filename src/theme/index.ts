import { DefaultTheme } from 'styled-components';
import { typography } from './typography';
import { colors } from './colors';
import { breakpoints } from './breakpoints';

const theme: DefaultTheme = {
  colors,
  typography,
  breakpoints,
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};

export default theme;
