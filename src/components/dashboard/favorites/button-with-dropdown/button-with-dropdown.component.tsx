import React, { useRef, useState } from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import useOnClickOutside from '../../../../hooks/useOnClickOutside.hook';

import * as S from './button-with-dropdown.styled';

const ButtonWithDropDown: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
      {isDropdownOpen ? <S.DropDownContent>Remove</S.DropDownContent> : null}
    </S.DropdownWrapper>
  );
};

export default ButtonWithDropDown;
