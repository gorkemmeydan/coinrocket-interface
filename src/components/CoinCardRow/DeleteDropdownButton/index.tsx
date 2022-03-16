import React, { useRef, useState } from 'react';

import { useHoldings } from '@contexts/holdings';

import useOnClickOutside from '@hooks/useOnClickOutside';

import removeCoinFromPortfolioAndRefreshData from '@services/removeCoinFromPortfolioAndRefreshData';

import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import * as S from './DeleteDropdownButton.styled';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  coinName: string;
}

const DeleteDropDownButton: React.FC<Props> = ({
  setActionLoading,
  coinName,
}: Props) => {
  const { holdings, setHoldings } = useHoldings();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleRemove = async () => {
    setActionLoading(true);

    await removeCoinFromPortfolioAndRefreshData({
      coinName,
      holdings,
      setHoldings,
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
      <S.DropdownButton onClick={() => toggleDropdown()}>
        {!isDropdownOpen ? (
          <BsThreeDotsVertical size={'25'} />
        ) : (
          <BsX size={'25'} />
        )}
      </S.DropdownButton>
      {isDropdownOpen ? (
        <S.DropDownContent onClick={handleRemove}>Remove</S.DropDownContent>
      ) : null}
    </S.DropdownWrapper>
  );
};

export default DeleteDropDownButton;
