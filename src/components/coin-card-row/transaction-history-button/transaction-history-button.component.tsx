import React, { useState } from 'react';
import { CoinTransactionsItem } from '../../../types/types';
import capitalizeFirstLetter from '../../../utils/capitatalizeFirstLetter.util';
import Modal from '../../modal/modal.component';
import TransactionHistoryTable from '../transaction-history-content/transaction-history-content';

import * as S from './transaction-history-button.styled';

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
