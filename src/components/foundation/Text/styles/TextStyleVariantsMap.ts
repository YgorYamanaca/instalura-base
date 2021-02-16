import { css, CSSProp } from 'styled-components';

interface ITextStyleVariantsMap {
  readonly [key: string]: CSSProp,
}

const TextStyleVariantsMap: ITextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
  `,

  paragraph2: css`
    font-size: ${({ theme }) => theme.typography.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typography.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typography.paragraph2.lineHeight};
  `,
  
  smallestException: css`
    font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typography.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typography.smallestException.lineHeight};
  `,
}

export default TextStyleVariantsMap;