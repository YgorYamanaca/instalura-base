import { CSSProperties } from 'react';
import { css, CSSProp } from 'styled-components';
import IBreakpoints from '../breakpoints';
import { breakpointsMedia } from './breakpointsMedia';

export type IPropToStyle = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] | {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
}

export function propToStyle(propName: keyof IPropToStyle) {
  return (props: IPropToStyle): CSSProp | {[key in keyof CSSProperties]?: CSSProperties[key]}  => {
    const propValue: string | number | undefined | 
    {[key in keyof IBreakpoints]?: CSSProperties[keyof CSSProperties]} = props[propName];
    if (typeof propValue === 'object'){
      return css`
        ${breakpointsMedia({
        ...(propValue.xs && {
          xs: { [propName]: propValue.xs },
        }),
        ...(propValue.sm && {
          sm: { [propName]: propValue.sm },
        }),
        ...(propValue.md && {
          md: { [propName]: propValue.md },
        }),
        ...(propValue.lg && {
          lg: { [propName]: propValue.lg },
        }),
        ...(propValue.xl && {
          xl: { [propName]: propValue.xl },
        }),
      })}
      `;
    }
    return {
      [propName]: props[propName],
    };
  };
}