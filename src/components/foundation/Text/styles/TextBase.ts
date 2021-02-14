import styled, { css } from 'styled-components';
import { CSSProp } from 'styled-components';

interface ITextBaseStyle {
  readonly variant: string,
}

interface ITextStyleVariantsMap {
  readonly [key: string]: CSSProp,
}

const TextStyleVariantsMap : ITextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
}

export const TextBase = styled.span<ITextBaseStyle>`
  font-size: ${({ variant }) => TextStyleVariantsMap[variant]}
`;