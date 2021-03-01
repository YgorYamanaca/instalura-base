import styled, { CSSProperties } from 'styled-components';
import IBreakpoints from '../../../theme/breakpoints';
import { propToStyle } from '../../../theme/utils/propToStyle';

type IBoxProps = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] |
  // eslint-disable-next-line no-unused-vars
  {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
}

const Container = styled.div<IBoxProps>`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('position')}
  ${propToStyle('maxWidth')}
  ${propToStyle('alignSelf')}
`;

const OverFlow = styled.div<IBoxProps>`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const Box = {
  Container,
  OverFlow,
};

export default Box;
