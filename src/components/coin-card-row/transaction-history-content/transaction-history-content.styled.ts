import styled from 'styled-components';

export const TransactionHistoryTableWrapper = styled.table`
  background: var(--background);
  color: var(--text);

  width: 95%;
  flex: 1;
  margin: 1vh;
  margin-top: 0vh;
  border-radius: 2vmin;
  padding: 2vmin;

  border-collapse: separate;
  border-spacing: 0 0.5vh;
`;

export const TransactionHistoryTableHead = styled.thead``;

export const HeadRow = styled.tr``;

export const HeadData = styled.td`
  font-weight: bold;
`;

export const RowDataWrapper = styled.tr`
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.99);
  height: 8vh;
`;

export const RowData = styled.td``;

export const DropdownWrapper = styled.div`
  position: relative;
  border: none;
`;

export const DeleteTransactionButton = styled.button`
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
  position: absolute;
  padding: 5px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const TransactionHistoryTableBody = styled.tbody``;
