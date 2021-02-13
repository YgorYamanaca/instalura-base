import React from 'react';
import InstaluraLogo from '../../theme/InstaluraLogo/Instalura';
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
        {links.map((link: ILink): JSX.Element => {
          return(
            <li>
              <a href={link.url}>
                {link.text}
              </a>
            </li>
        )})}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>
          Entrar
        </button>
        <button>
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

export default Menu;