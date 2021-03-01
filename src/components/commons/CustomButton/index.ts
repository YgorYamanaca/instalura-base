import styled, { css } from 'styled-components';
import get from 'lodash/get';
import TextStyleVariantsMap from '../../foundation/Text/styles/TextStyleVariantsMap';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import IBreakpoints from '../../../theme/breakpoints';
import { propToStyle } from '../../../theme/utils/propToStyle';

interface ICustomButton {
  // eslint-disable-next-line no-unused-vars
  readonly margin?: {[key in keyof IBreakpoints]?: string};
  readonly display?: string;
  readonly ghost?: boolean;
  readonly variant?: string;
  readonly fullWidth?: boolean;
}

const ButtonGhost = css<ICustomButton>`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css<ICustomButton>`
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`;

const CustomButton = styled.button<ICustomButton>`
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

  &:hover {
    opacity: .5;
  }
  
  outline: none;
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
`;

export default CustomButton;
