import styled from 'styled-components';
import Text from '../../../foundation/Text';

export const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Input = styled(Text)`
  width: 100%; 
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light?.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};
