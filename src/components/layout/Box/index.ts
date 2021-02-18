import styled, { CSSProperties } from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

type IBoxProps = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey]
}

export const Box = styled.div<IBoxProps>`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;