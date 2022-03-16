import React, { useState } from 'react';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import calculateChangePercent from '@utils/calculateChangePercent';
import Modal from '../../Modal';
import Spinner from '../../Spinner';
import AddToPortfolioContent from '../AddToPortfolioContent';

import * as S from './PortfolioStats.styled';

interface Props {
  actionLoadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isHiddenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  lastWeeksPriceData: number[];
}

const PortfolioStats: React.FC<Props> = ({
  actionLoadingState,
  isHiddenState,
  lastWeeksPriceData,
}: Props) => {
  const [isHidden, setIsHidden] = isHiddenState;
  const [actionLoading, setActionLoading] = actionLoadingState;

  const isModalOpen = useState(false);

  const iconSize = '30';

  const todaysBalance = lastWeeksPriceData[lastWeeksPriceData.length - 1];
  const yesterdaysBalance = lastWeeksPriceData[lastWeeksPriceData.length - 2];

  const totalBalance = todaysBalance.toFixed(4).toString();
  const portfolioChange = (todaysBalance - yesterdaysBalance)
    .toFixed(4)
    .toString();
  const changePer = calculateChangePercent(yesterdaysBalance, todaysBalance);
  let portfolioPercent = changePer.toFixed(2).toString();
  const isPositive = changePer >= 0;
  const hidden = '*********';

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <S.PortFolioStatsWrapper>
      <S.PortfolioHeaderWrapper>
        <S.PortfolioHeaderText>Your Portfolio</S.PortfolioHeaderText>
        <S.HidePortfolioButton onClick={toggleHidden}>
          {isHidden ? (
            <AiFillEyeInvisible size={iconSize} />
          ) : (
            <AiFillEye size={iconSize} />
          )}
        </S.HidePortfolioButton>
      </S.PortfolioHeaderWrapper>

      {actionLoading ? (
        <Spinner />
      ) : (
        <S.StatsWrapper>
          <S.Stat>
            <S.MoneyField>$ {!isHidden ? totalBalance : hidden}</S.MoneyField>
            <S.TextField>Total Balance</S.TextField>
          </S.Stat>
          <S.Stat>
            <S.MoneyField>
              $ {!isHidden ? portfolioChange : hidden}
            </S.MoneyField>
            <S.TextAndColorWrapper>
              <S.TextField>24h Portfolio Change</S.TextField>
              {isHidden ? (
                <S.TextField>{hidden}</S.TextField>
              ) : (
                <S.ColoredText isPositive={isPositive}>
                  {portfolioPercent}%
                </S.ColoredText>
              )}
            </S.TextAndColorWrapper>
          </S.Stat>
          <S.AddNewCoinButton onClick={() => isModalOpen[1](true)}>
            Add new coin
          </S.AddNewCoinButton>
          <Modal
            isOpenState={isModalOpen}
            children={
              <AddToPortfolioContent
                setActionLoading={setActionLoading}
                setModal={isModalOpen[1]}
              />
            }
            title='Add new coin to portfolio'
          />
        </S.StatsWrapper>
      )}
    </S.PortFolioStatsWrapper>
  );
};

export default PortfolioStats;
