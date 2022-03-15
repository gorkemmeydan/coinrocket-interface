import React, { useRef, useState } from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import { useHoldings } from '../../../contexts/holdings.context';
import useOnClickOutside from '../../../hooks/useOnClickOutside.hook';
import removeCoinFromPortfolioAndRefreshData from '../../../services/removeCoinFromPortfolioAndRefreshData';

import * as S from './delete-dropdown-button.styled';

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
