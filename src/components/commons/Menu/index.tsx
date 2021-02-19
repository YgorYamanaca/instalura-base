import React from 'react';
import InstaluraLogo from '../../../assets/logo/Instalura';
import Text from '../../foundation/Text';
import CustomButton from '../CustomButton';
import MenuWrapper from './styles';

interface ILink {
  text: string,
  url: string
}

const Menu: React.FC = () => {
  const links: ILink[] = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas Frequesntes',
      url: '/faq',
    },
    {
      text: 'Sobre',
      url: '/sobre',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <InstaluraLogo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link: ILink): JSX.Element => (
          <li key={`li-key-${link.text}`}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <CustomButton ghost variant="secondary.main">
          Entrar
        </CustomButton>
        <CustomButton variant="primary.main">
          Cadastrar
        </CustomButton>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;
