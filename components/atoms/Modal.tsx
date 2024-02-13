// app/Modal.tsx
import React, { ReactNode } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MyModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className= 'modal-content'
      ariaHideApp={false}
      overlayClassName= 'modal-overlay'
    >
      {children}
    </Modal>
  );
};

export default MyModal;

