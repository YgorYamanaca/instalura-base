import React from 'react';
import InstaluraLogo from '../../../theme/InstaluraLogo/Instalura';
import { CustomButton } from '../CustomButton';
import { MenuWrapper } from './styles/MenuWrapper';

interface ILink {
  text:string,
  url:string
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
  ]

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <InstaluraLogo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link: ILink, index: number): JSX.Element => {
          return(
            <li key={`li-key-${index}`}>
              <a href={link.url}>
                {link.text}
              </a>
            </li>
        )})}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <CustomButton ghost variant='secondary.main'>
          Entrar
        </CustomButton>
        <CustomButton variant='primary.main'>
          Cadastrar
        </CustomButton>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu;