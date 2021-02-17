import React, {  ReactNode } from 'react';
import IBreakpoints from '../../../theme/breakpoints';
import ITypographyVariants from '../../../theme/typography';
import { TextBase } from './styles';

interface ITextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span',
  variant?: keyof ITypographyVariants,
  children: ReactNode;
  color?: string;
  textAlign?: string | {[key in keyof IBreakpoints]?: string };
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