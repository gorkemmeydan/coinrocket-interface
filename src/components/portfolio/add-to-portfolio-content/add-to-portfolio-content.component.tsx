import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { useAppSelector } from '../../../redux/hooks';
import { addWatchlistStartAsync } from '../../../redux/watchlist/watchlish.actions';
import coinDataToSearch, {
  customOptionType,
} from '../../../utils/coinDataToSearch.util';
import isCoinExistInCoinIdArr from '../../../utils/isCoinExistInCoinIdArr.util';

import * as S from './add-to-portfolio-content.styled';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToPortfolioContent: React.FC<Props> = ({ setModal }: Props) => {
  const coins = useAppSelector((state) => state.market.coins);
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

  const dummyPortfolio = ['bitcoin', 'ethereum'];

  const handleButtonSubmit = () => {
    if (selectedCoin && selectedCoin != '') {
      if (isCoinExistInCoinIdArr(dummyPortfolio, selectedCoin)) {
        setCoinExistsError(true);
      } else {
        // dispatch(addWatchlistStartAsync(selectedCoin));
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
    <S.AddToPortfolioContentWrapper>
      <Select
        styles={selectStyle}
        options={coinDataToSearch(coins)}
        onChange={handleChange}
      />
      <S.AddToPortfolioButton onClick={handleButtonSubmit}>
        Add to portfolio
      </S.AddToPortfolioButton>
      {selectCoinError ? (
        <S.ErrorText>Please select coin from the list</S.ErrorText>
      ) : null}
      {coinExistsError ? (
        <S.ErrorText>Coin already exists in your portfolio</S.ErrorText>
      ) : null}
    </S.AddToPortfolioContentWrapper>
  );
};

export default AddToPortfolioContent;
