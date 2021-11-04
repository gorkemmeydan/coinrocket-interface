import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { useAppSelector } from '../../../../redux/hooks';
import { addWatchlistStartAsync } from '../../../../redux/watchlist/watchlish.actions';
import coinDataToSearch, {
  customOptionType,
} from '../../../../utils/coinDataToSearch.util';
import isCoinExistInCoinIdArr from '../../../../utils/isCoinExistInCoinIdArr.util';

import * as S from './add-to-watchlist-content.styled';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToWatchlistContent: React.FC<Props> = ({ setModal }: Props) => {
  const coins = useAppSelector((state) => state.market.coins);
  const watched_coins = useAppSelector(
    (state) => state.watchlist.watched_coins
  );

  const dispatch = useDispatch();

  const [selectedCoin, setSelectedCoin] = useState<string>('');
  const [selectCoinError, setSelectCoinError] = useState<boolean>(false);
  const [coinExistsError, setCoinExistsError] = useState<boolean>(false);

  const handleChange = (selectedOption: SingleValue<customOptionType>) => {
    if (selectedOption) {
      const newSelected: string = selectedOption.id;
      setSelectedCoin(newSelected);
      setSelectCoinError(false);
      setCoinExistsError(false);
    }
  };

  const handleButtonSubmit = () => {
    if (selectedCoin && selectedCoin != '') {
      if (isCoinExistInCoinIdArr(watched_coins, selectedCoin)) {
        setCoinExistsError(true);
      } else {
        dispatch(addWatchlistStartAsync(selectedCoin));
        setModal(false);
      }
    } else {
      setSelectCoinError(true);
      setCoinExistsError(false);
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
      {coinExistsError ? (
        <S.ErrorText>Coin already exists in your watchlist</S.ErrorText>
      ) : null}
    </S.AddToWatchlistContentWrapper>
  );
};

export default AddToWatchlistContent;
