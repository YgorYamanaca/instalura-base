import React from 'react';
import Text from '../../foundation/Text';
import { FooterWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
      </a>
      <Text variant='paragraph2' tag='p'>
        Orgulhosamente criado durante
        {' '}
        o
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </Text>
    </FooterWrapper>
  );
}

export default Footer;