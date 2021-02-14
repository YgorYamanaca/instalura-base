import styled, { css } from "styled-components";
import get from 'lodash/get';

interface ICustomButton{
  readonly ghost?: boolean;
  readonly variant?: string;
}

const ButtonGhost = css<ICustomButton>`
  color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css<ICustomButton>`
  background-color: ${({theme, variant}) => get(theme, `colors.${variant}.color`)};
  color: ${({theme, variant}) => get(theme, `colors.${variant}.contrastText`)};
`;

export const CustomButton = styled.button<ICustomButton>`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  ${({ ghost }) => ghost? ButtonGhost : ButtonDefault};
`;