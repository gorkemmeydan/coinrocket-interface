import React, { useRef, useState } from 'react';
import { CoinTransactionsItem, UserPortfolioItem } from '../../../types/types';
import _uniqueId from 'lodash/uniqueId';

import * as S from './transaction-history-content.styled';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  coinTransactions: CoinTransactionsItem[];
}

import { BsFillTrashFill, BsX } from 'react-icons/bs';
import useOnClickOutside from '../../../hooks/useOnClickOutside.hook';
import removeTransactionFromCoinAndRefreshData from '../../../services/removeTransactionFromCoinAndRefreshData';
import { useHoldings } from '../../../contexts/holdings.context';

const TransactionHistoryTable: React.FC<Props> = ({
  setActionLoading,
  coinTransactions,
}: Props) => {
  return (
    <S.TransactionHistoryTableWrapper>
      <S.TransactionHistoryTableHead>
        <S.HeadRow>
          <S.HeadData>Date</S.HeadData>
          <S.HeadData>Quantity</S.HeadData>
          <S.HeadData>Action</S.HeadData>
          <S.HeadData></S.HeadData>
        </S.HeadRow>
      </S.TransactionHistoryTableHead>
      <S.TransactionHistoryTableBody>
        {coinTransactions.map((transaction) => {
          return (
            <S.RowDataWrapper key={_uniqueId('transaction-history-row-')}>
              <S.RowData>
                {new Date(transaction.transactionDate).toLocaleDateString()}
              </S.RowData>
              <S.RowData>{transaction.quantity}</S.RowData>
              <S.RowData>{transaction.positive ? 'Buy' : 'Sell'}</S.RowData>
              <S.RowData>
                <DeleteTransactionButton
                  transaction={transaction}
                  setActionLoading={setActionLoading}
                />
              </S.RowData>
            </S.RowDataWrapper>
          );
        })}
      </S.TransactionHistoryTableBody>
    </S.TransactionHistoryTableWrapper>
  );
};

interface ButtonProps {
  transaction: CoinTransactionsItem;
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteTransactionButton: React.FC<ButtonProps> = ({
  transaction,
  setActionLoading,
}) => {
  const { holdings, setHoldings } = useHoldings();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleRemove = async () => {
    setActionLoading(true);

    await removeTransactionFromCoinAndRefreshData({
      coinName: transaction.coinName,
      id: transaction.id,
      holdings: holdings,
      setHoldings: setHoldings,
    });

    setActionLoading(false);
  };

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef<HTMLDivElement>(null);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setDropdownOpen(false));

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.DropdownWrapper ref={ref}>
      <S.DeleteTransactionButton onClick={() => toggleDropdown()}>
        {!isDropdownOpen ? (
          <BsFillTrashFill size={'25'} />
        ) : (
          <BsX size={'25'} />
        )}
      </S.DeleteTransactionButton>
      {isDropdownOpen ? (
        <S.DropDownContent onClick={handleRemove}>Remove</S.DropDownContent>
      ) : null}
    </S.DropdownWrapper>
  );
};

export default TransactionHistoryTable;
