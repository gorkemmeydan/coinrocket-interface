import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  border: none;
`;

export const DropdownButton = styled.button`
  background: none;
  color: var(--text);
  border: none;

  &: hover {
    cursor: pointer;
  }
`;

export const DropDownContent = styled.div`
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--text);

  position: absolute;
  padding: 5px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
