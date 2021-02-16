import React from 'react';
import AluraLogo from '../../../assets/logo/AluroLogo';
import Text from '../../foundation/Text';
import { FooterWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <AluraLogo />
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