interface ITypograph{
  fontSize: string,
  fontWeight: string,
  lineHeight: number,
}

export default interface ITypographyVariants {
  title: ITypograph,
  titleXS: ITypograph,
  subTitle: ITypograph,
  paragraph1: ITypograph,
  paragraph2: ITypograph,
  smallestException: ITypograph,
// eslint-disable-next-line semi
}

export const typography: ITypographyVariants = {
  // [title]
  title: {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: 1.25,
  },
  titleXS: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25,
  },
  // [subTitle]
  subTitle: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25,
  },
  // [paragraph1]
  paragraph1: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25,
  },
  // [paragraph2]
  paragraph2: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.25,
  },
  // [smallestException]
  smallestException: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1,
  },
};
