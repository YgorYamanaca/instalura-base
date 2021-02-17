import { css, CSSProp } from 'styled-components';
import ITypographyVariants from '../../../../theme/typography';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

type ITextStyleVariantsMap = {
  [key in keyof ITypographyVariants]?: CSSProp
}

const TextStyleVariantsMap: ITextStyleVariantsMap = {
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.titleXS.fontSize};
      font-weight: ${theme.typography.titleXS.fontWeight};
      line-height: ${theme.typography.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.title.fontSize};
          font-weight: ${theme.typography.title.fontWeight};
          line-height: ${theme.typography.title.lineHeight};
        `}
      `,
    })}
  `,

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