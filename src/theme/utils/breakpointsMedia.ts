import { css, CSSProp } from 'styled-components';
import IBreakpoints, { breakpoints } from '../breakpoints';

// eslint-disable-next-line no-unused-vars
function breakpointsMedia(cssByBreakpoint: {[key in keyof IBreakpoints]?: CSSProp}): CSSProp {
  // eslint-disable-next-line max-len
  const breakpointNames: (keyof IBreakpoints)[] = Object.keys(breakpoints) as Array<keyof IBreakpoints>;
  return breakpointNames
    .filter((breakpointName): boolean => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName): CSSProp => css`
    @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}

export default breakpointsMedia;
