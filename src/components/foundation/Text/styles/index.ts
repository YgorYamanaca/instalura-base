import styled from 'styled-components';
import get from 'lodash/get';
import ITypographyVariants from '../../../../theme/typography';
import { propToStyle } from '../../../../theme/utils/propToStyle';
import TextStyleVariantsMap from './TextStyleVariantsMap';

interface ITextBaseStyle{
  readonly variant: keyof ITypographyVariants,
}

const TextBase = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`;

export default TextBase;
