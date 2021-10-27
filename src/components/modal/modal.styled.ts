import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  border: 2px solid grey;
  background: black;
  color: white;
  width: 50vw;
  height: 50vh;
  min-width: 500px;
  min-height: 600px;
  border-radius: 15px;
  padding: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  height: 10%;
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5vh;
`;

export const ModalBody = styled.div`
  padding-top: 0.5vh;
  background: black;
  height: 80%;
  width: 100%;
  border-radius: 2vmin;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2vmin;
`;

export const CloseModalButton = styled.div`
  &: hover {
    cursor: pointer;
  }
`;
