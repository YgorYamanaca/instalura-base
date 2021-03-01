import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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
    <motion.div
      variants={{
        open: {
          x: 0,
          scale: 1,
        },
        closed: {
          scale: 2,
        },
      }}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        duration: 0.5,
      }}
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </motion.div>
  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
