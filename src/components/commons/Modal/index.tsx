import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './styles';

type IModal = {
  isOpen: boolean
  onClose: Function
  children: (Objec: Object) => ReactNode
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(event): void => {
      const isSafeArea = (event.target as HTMLElement).closest('[data-modal-safe-area="true"]');
      return !isSafeArea && onClose();
    }}
  >
    {children({
      'data-modal-safe-area': 'true',
    })}
  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
