import { css } from 'styled-components';
import { CSSProp } from 'styled-components';
import { breakpoints } from '../breakpoints';

export function breakpointsMedia(cssByBreakpoint: {[key: string]: CSSProp}): CSSProp{
  const breakpointNames: string[] = Object.keys(breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName: string) => css`
    @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}