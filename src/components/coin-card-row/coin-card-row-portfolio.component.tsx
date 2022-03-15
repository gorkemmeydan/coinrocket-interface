import React from 'react';
import { UserPortfolioItem } from '../../types/types';
import numberToObjectArray from '../../utils/arrayToObjectArray.util';
import PriceChart from '../price-chart/price-chart.component';

import * as S from './coin-card.-row.styled';
import CoinName from './coin-name/coin-name.component';
import Holdings from './holdings/holdings.component';
import PosNegText from './pos-neg-text/pos-neg-text.component';
import checkPositiveFromArr from '../../utils/checkPositive.util';
import calculateChangePercent from '../../utils/calculateChangePercent';
import TransactionHistoryButton from './transaction-history-button/transaction-history-button.component';
import DeleteDropDownButton from './delete-dropdown-button/delete-dropdown-button';
import AddTransactionButton from './add-transaction-button/add-transaction-button';

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
            data={numberToObjectArray(portfolioItem.coinData.price_7d, 'key')}
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
