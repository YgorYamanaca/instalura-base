import styled, { StyledComponentBase, DefaultTheme, css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../../../foundation/Text/styles/TextStyleVariantsMap';

interface IMenuWrapperStyle extends StyledComponentBase<any, DefaultTheme, {}, never> {
  LeftSide?: any,
  CentralSide?: any,
  RightSide?: any,
}

const MenuWrapper: IMenuWrapperStyle = styled.nav<IMenuWrapperStyle>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding: 0 28px;
  font-family: 'Rubik', sans-serif;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,

    lg: css`
      max-width: 1160px; 
    `,

    xl: css`
      max-width: 1222px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
        width: 131px;
        height: 32px;
        order: initial;
        padding-right: 16px;
      `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  list-style: none; 
  order: 3;
  margin-top: 17px;
  padding: 12px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  & > li > a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: #88989E;
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }

    ${breakpointsMedia({
    xs: css`
              ${TextStyleVariantsMap.smallestException}
          `,
    md: css`
            ${TextStyleVariantsMap.paragraph1}
          `,
  })}
  }
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

export default MenuWrapper;
