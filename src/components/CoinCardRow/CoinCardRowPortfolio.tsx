import React from 'react';
import { UserPortfolioItem } from 'types';

import arrayToObjectArray from '@utils/arrayToObjectArray';
import checkPositiveFromArr from '@utils/checkPositiveFromArr';
import calculateChangePercent from '@utils/calculateChangePercent';

import PriceChart from '../PriceChart';
import CoinName from './CoinName';
import Holdings from './Holdings';
import PosNegText from './PosNegText';
import TransactionHistoryButton from './TransactionHistoryButton';
import DeleteDropDownButton from './DeleteDropdownButton';
import AddTransactionButton from './AddTransactionButton';

import * as S from './CoinCardRow.styled';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isHidden: boolean;
  portfolioItem: UserPortfolioItem;
}

const CoinCardRowPortfolio: React.FC<Props> = ({
  setActionLoading,
  isHidden,
  portfolioItem,
}: Props) => {
  const hiddenVal = '*******';
  let amount: number = 0;

  if (portfolioItem.lastWeeksHoldings) {
    amount =
      portfolioItem.lastWeeksHoldings[
        portfolioItem.lastWeeksHoldings.length - 1
      ];
  }

  const money = portfolioItem.coinData
    ? amount *
      portfolioItem.coinData?.price_7d[
        portfolioItem.coinData?.price_7d.length - 1
      ]
    : 0;

  return portfolioItem.coinData ? (
    <S.RowDataWrapper>
      <S.RowData>
        <CoinName
          isFullSize={true}
          coinData={{
            logoUrl: portfolioItem.coinData.logoUrl,
            name: portfolioItem.coinData.name,
            symbol: portfolioItem.coinData.symbol.toUpperCase(),
          }}
        />
      </S.RowData>
      <S.RowData>${portfolioItem.coinData.price}</S.RowData>
      <S.RowData>
        <PosNegText
          change={Number(portfolioItem.coinData.change_24h.toFixed(2))}
        />
      </S.RowData>
      <S.RowData>
        <PosNegText
          change={Number(
            calculateChangePercent(
              portfolioItem.coinData.price_7d[0],
              portfolioItem.coinData.price_7d[
                portfolioItem.coinData.price_7d.length - 1
              ]
            ).toFixed(2)
          )}
        />
      </S.RowData>
      <S.RowData>
        <S.PriceChartWrapper>
          <PriceChart
            isPositive={checkPositiveFromArr(portfolioItem.coinData.price_7d)}
            data={arrayToObjectArray(portfolioItem.coinData.price_7d, 'key')}
            range={portfolioItem.coinData.price_min_max}
            showAnimation={false}
          />
        </S.PriceChartWrapper>
      </S.RowData>

      <S.RowData>
        <Holdings
          totalMoney={isHidden ? hiddenVal : money.toFixed(2).toString()}
          totalAmount={isHidden ? hiddenVal : amount.toFixed(6).toString()}
        />
      </S.RowData>

      <S.RowData>
        <TransactionHistoryButton
          setActionLoading={setActionLoading}
          coinName={portfolioItem.coinName}
          coinTransactions={portfolioItem.coinTransactions}
        />
      </S.RowData>

      <S.RowData>
        <AddTransactionButton
          setActionLoading={setActionLoading}
          coinName={portfolioItem.coinName}
        />
      </S.RowData>

      <S.RowData>
        <DeleteDropDownButton
          setActionLoading={setActionLoading}
          coinName={portfolioItem.coinName}
        />
      </S.RowData>
    </S.RowDataWrapper>
  ) : null;
};

export default CoinCardRowPortfolio;
