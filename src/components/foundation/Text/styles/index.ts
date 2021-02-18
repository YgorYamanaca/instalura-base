import styled from 'styled-components';
import ITypographyVariants from '../../../../theme/typography';
import { propToStyle } from '../../../../theme/utils/propToStyle';
import TextStyleVariantsMap from './TextStyleVariantsMap';
import get from 'lodash/get';

interface ITextBaseStyle{
  readonly variant: keyof ITypographyVariants,
}

export const TextBase = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`;