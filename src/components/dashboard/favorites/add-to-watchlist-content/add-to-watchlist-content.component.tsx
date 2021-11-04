import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { useAppSelector } from '../../../../redux/hooks';
import { addWatchlistStartAsync } from '../../../../redux/watchlist/watchlish.actions';
import coinDataToSearch, {
  customOptionType,
} from '../../../../utils/coinDataToSearch.util';

import * as S from './add-to-watchlist-content.styled';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToWatchlistContent: React.FC<Props> = ({ setModal }: Props) => {
  const coins = useAppSelector((state) => state.market.coins);
  const dispatch = useDispatch();

  const [selectedCoin, setSelectedCoin] = useState<string>('');
  const [selectCoinError, setSelectCoinError] = useState<boolean>(false);

  const handleChange = (selectedOption: SingleValue<customOptionType>) => {
    if (selectedOption) {
      const newSelected: string = selectedOption.id;
      setSelectedCoin(newSelected);
      setSelectCoinError(false);
    }
  };

  const handleButtonSubmit = () => {
    if (selectedCoin && selectedCoin != '') {
      dispatch(addWatchlistStartAsync(selectedCoin));
      setModal(false);
    } else {
      setSelectCoinError(true);
    }
  };

  const selectStyle: StylesConfig<customOptionType, false> = {
    option: (provided) => {
      return {
        ...provided,
        color: 'black',
      };
    },
    control: (provided) => {
      return {
        ...provided,
        color: 'black',
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: 'black',
      };
    },
  };

  return (
    <S.AddToWatchlistContentWrapper>
      <Select
        styles={selectStyle}
        options={coinDataToSearch(coins)}
        onChange={handleChange}
      />
      <S.AddToWatchlistButton onClick={handleButtonSubmit}>
        Add to watchlist
      </S.AddToWatchlistButton>
      {selectCoinError ? (
        <S.ErrorText>Please select coin from the list</S.ErrorText>
      ) : null}
    </S.AddToWatchlistContentWrapper>
  );
};

export default AddToWatchlistContent;
