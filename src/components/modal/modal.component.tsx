import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import useOnClickOutside from '../../hooks/useOnClickOutside.hook';

import * as S from './modal.styled';

interface ModalProps {
  isOpenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpenState,
  children,
  title,
}: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = isOpenState;

  // Due to SSR, we will set browser when component mounts
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // check if outside of modal is clicked
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsModalOpen(false));

  const modalContent = isModalOpen ? (
    <S.ModalOverlay>
      <S.ModalWrapper ref={ref}>
        <S.ModalHeader>
          <S.CloseModalButton onClick={() => setIsModalOpen(false)}>
            X
          </S.CloseModalButton>
        </S.ModalHeader>
        {title && <S.ModalTitle>{title}</S.ModalTitle>}
        <S.ModalBody>{children}</S.ModalBody>
      </S.ModalWrapper>
    </S.ModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')!
    );
  } else {
    return null;
  }
};

export default Modal;
