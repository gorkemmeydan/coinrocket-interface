import React, { useState } from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';

import { useHoldings } from '@contexts/holdings';
import { useMarket } from '@contexts/market';

import addCoinToPortfolioAndRefreshData from '@services/addCoinToPortfolioAndRefreshData';

import coinDataToSearch, { customOptionType } from '@utils/coinDataToSearch';
import isCoinExistInCoinIdArr from '@utils/isCoinExistInCoinIdArr';

import * as S from './AddToPortfolioContent.styled';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToPortfolioContent: React.FC<Props> = ({
  setActionLoading,
  setModal,
}: Props) => {
  const { coins } = useMarket();
  const { holdings, setHoldings } = useHoldings();
  let portfolioCoins: string[] = [];

  if (holdings?.portfolio) {
    for (let i = 0; i < holdings?.portfolio.length; i++) {
      portfolioCoins.push(holdings?.portfolio[i].coinName);
    }
  }

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
      if (isCoinExistInCoinIdArr(portfolioCoins, selectedCoin)) {
        setCoinExistsError(true);
      } else {
        setActionLoading(true);

        await addCoinToPortfolioAndRefreshData({
          coinName: selectedCoin,
          holdings: holdings,
          setHoldings: setHoldings,
        });

        setActionLoading(false);
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
        options={coinDataToSearch(coins ? coins : [])}
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
