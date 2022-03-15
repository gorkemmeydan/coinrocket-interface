import React, { useRef, useState } from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import { useHoldings } from '../../../../contexts/holdings.context';
import useOnClickOutside from '../../../../hooks/useOnClickOutside.hook';
import removeFromWatchlistAndClearData from '../../../../services/removeFromWatchlistAndClearData';

import * as S from './button-with-dropdown.styled';

interface Props {
  coin_id: string;
  setItemLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonWithDropDown: React.FC<Props> = ({
  coin_id,
  setItemLoading,
}: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { holdings, setHoldings } = useHoldings();

  const handleRemove = async () => {
    setItemLoading(true);
    await removeFromWatchlistAndClearData({
      coinName: coin_id,
      holdings: holdings,
      setHoldings: setHoldings,
    });
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

export default ButtonWithDropDown;
