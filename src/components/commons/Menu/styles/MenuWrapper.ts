import styled, { StyledComponentBase } from 'styled-components';

interface IMenuWrapper extends StyledComponentBase<any, {}> {
  LeftSide?: any,
  CentralSide?: any,
  RightSide?: any,
}

export const MenuWrapper: IMenuWrapper = styled.nav<IMenuWrapper>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding: 0 28px;
  font-family: 'Rubik', sans-serif;
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
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
  }
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;