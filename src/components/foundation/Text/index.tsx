import React, { ReactNode } from 'react';
import { TextBase } from './styles/TextBase';

interface ITextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span',
  variant?: 'paragraph1' | 'smallestException',
  children: ReactNode;
  
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