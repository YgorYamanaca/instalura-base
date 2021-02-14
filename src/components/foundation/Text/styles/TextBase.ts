import styled, { css } from 'styled-components';
import { CSSProp } from 'styled-components';

interface ITextBaseStyle {
  readonly variant: 'paragraph1' | 'smallestException',
}

interface ITextStyleVariantsMap {
  readonly [key: string]: CSSProp,
}

const TextStyleVariantsMap: ITextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typography.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typography.smallestException.lineHeight};
  `,
}

export const TextBase = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]}
`;