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
}