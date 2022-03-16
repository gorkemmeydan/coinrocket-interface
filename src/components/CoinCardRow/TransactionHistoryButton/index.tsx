import React, { useState } from 'react';

import { CoinTransactionsItem } from 'types';
import capitalizeFirstLetter from '@utils/capitatalizeFirstLetter';

import Modal from '../../Modal';
import TransactionHistoryTable from '../TransactionHistoryTable';
import * as S from './TransactionHistoryButton.styled';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  coinName: string;
  coinTransactions: CoinTransactionsItem[];
}

const TransactionHistoryButton: React.FC<Props> = ({
  setActionLoading,
  coinName,
  coinTransactions,
}: Props) => {
  const isModalOpen = useState(false);

  return (
    <>
      <S.ShowTransactionsButton onClick={() => isModalOpen[1](true)}>
        Details
      </S.ShowTransactionsButton>
      <Modal
        isOpenState={isModalOpen}
        children={
          <TransactionHistoryTable
            setActionLoading={setActionLoading}
            coinTransactions={coinTransactions}
          />
        }
        title={`Transactions for ${capitalizeFirstLetter(coinName)}`}
      />
    </>
  );
};

export default TransactionHistoryButton;
