import React, {  ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import IBreakpoints from '../../../theme/breakpoints';
import ITypographyVariants from '../../../theme/typography';
import { TextBase } from './styles';

type CSSPropsMap = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] | {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
}
interface ITextProps extends CSSPropsMap {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span',
  variant?: keyof ITypographyVariants,
  children: ReactNode;
  color?: string;
  href?: string;
}

const Text: React.FC<ITextProps> = ({tag='span', variant='paragraph1', children, ...rest}) => {
  return(
    <TextBase
      as={tag}
      variant={variant}
      {...rest}
    >
      {children}
    </TextBase>
  );
}

export default Text;