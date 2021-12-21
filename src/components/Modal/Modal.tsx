import React from 'react';
import { Portal } from '../Portal/Portal';
import { ModalContainer } from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClose = () => console.warn('Modal onClose not implemented'),
  children,
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <ModalContainer>
        <button
          className="modal__close_bg"
          type="button"
          aria-label="close button"
          onClick={onClose}
        />
        <div className="modal__content">
          <button
            className="modal__close_button"
            type="button"
            aria-label="close button"
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </ModalContainer>
    </Portal>
  );
};
