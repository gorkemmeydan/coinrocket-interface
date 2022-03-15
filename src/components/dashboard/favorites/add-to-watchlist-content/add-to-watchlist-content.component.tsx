import React, { useState } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { useHoldings } from '../../../../contexts/holdings.context';
import { useMarket } from '../../../../contexts/market.context';
import addToWatchlistAndRefreshData from '../../../../services/addToWatchlistAndRefreshData';
import coinDataToSearch, {
  customOptionType,
} from '../../../../utils/coinDataToSearch.util';
import isCoinExistInCoinIdArr from '../../../../utils/isCoinExistInCoinIdArr.util';

import * as S from './add-to-watchlist-content.styled';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setItemLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToWatchlistContent: React.FC<Props> = ({
  setModal,
  setItemLoading,
}: Props) => {
  const { holdings, setHoldings } = useHoldings();
  const watchedCoins = holdings?.watchList.map((w) => w.coinName);
  const { coins } = useMarket();

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

  const handleButtonSubmit = async () => {
    if (selectedCoin && selectedCoin != '') {
      if (
        isCoinExistInCoinIdArr(watchedCoins ? watchedCoins : [], selectedCoin)
      ) {
        setCoinExistsError(true);
      } else {
        setItemLoading(true);
        await addToWatchlistAndRefreshData({
          coinName: selectedCoin,
          holdings: holdings,
          setHoldings: setHoldings,
        });
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
        options={coins ? coinDataToSearch(coins) : undefined}
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
