import styled, { css } from "styled-components";
import get from 'lodash/get';
import TextStyleVariantsMap from "../../foundation/Text/styles/TextStyleVariantsMap";
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import IBreakpoints from "../../../theme/breakpoints";
import { propToStyle } from "../../../theme/utils/propToStyle";

interface ICustomButton{
  readonly ghost?: boolean;
  readonly variant?: string;
  readonly margin?: {[key in keyof IBreakpoints]?: string};
  readonly display?: string;
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
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
      font-weight:500;
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
      font-weight:500;
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}

  &:hover,
  &:focus {
    opacity: .5;
  }

  ${({ ghost }) => ghost? ButtonGhost : ButtonDefault};
`;