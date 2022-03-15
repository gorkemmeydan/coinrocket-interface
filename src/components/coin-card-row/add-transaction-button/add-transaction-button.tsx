import React, { useState } from 'react';
import capitalizeFirstLetter from '../../../utils/capitatalizeFirstLetter.util';
import Modal from '../../modal/modal.component';
import AddTransactionFrom from '../add-transaction-form/add-transaction-form';

import * as S from './add-transaction-button.styled';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  coinName: string;
}

const AddTransactionButton: React.FC<Props> = ({
  setActionLoading,
  coinName,
}: Props) => {
  const isModalOpen = useState(false);

  return (
    <>
      <S.AddTransactionButtonWrapper onClick={() => isModalOpen[1](true)}>
        Add new
      </S.AddTransactionButtonWrapper>
      <Modal
        isOpenState={isModalOpen}
        children={
          <AddTransactionFrom
            setActionLoading={setActionLoading}
            coinName={coinName}
          />
        }
        title={`Add new transaction for ${capitalizeFirstLetter(coinName)}`}
      />
    </>
  );
};

export default AddTransactionButton;
