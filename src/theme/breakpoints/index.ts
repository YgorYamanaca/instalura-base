interface IBreakpointsObject {
  [xs: string]: number,
}

export default interface IBreakpoints extends IBreakpointsObject {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
}

export const breakpoints: IBreakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}