import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  border: none;
`;

export const DropdownButton = styled.button`
  background: none;
  color: white;
  border: none;

  &: hover {
    cursor: pointer;
  }
`;

export const DropDownContent = styled.div`
  color: white;
  position: absolute;
  background: #1d1818;
  padding: 5px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
