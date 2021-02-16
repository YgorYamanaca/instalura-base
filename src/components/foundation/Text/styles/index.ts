import styled from 'styled-components';
import TextStyleVariantsMap from './TextStyleVariantsMap';

interface ITextBaseStyle {
  readonly variant: 'paragraph1' | 'paragraph2' | 'smallestException',
}

export const TextBase = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};
`;