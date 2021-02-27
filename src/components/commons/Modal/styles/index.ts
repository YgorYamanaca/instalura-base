import styled, { css } from 'styled-components';

type IModalWrapper = {
  isOpen: boolean;
}

const ModalWrapper = styled.div<IModalWrapper>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
  transition: .3s;
  z-index: 100;
`;

export default ModalWrapper;
