import React from 'react';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import checkPositive from '../../../utils/checkPositive.util';

import * as S from './portfolio-stats.styled';

interface Props {
  isHiddenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const PortfolioStats: React.FC<Props> = ({ isHiddenState }: Props) => {
  const [isHidden, setIsHidden] = isHiddenState;

  const iconSize = '30';

  const totalBalance = '49,453.96';
  const portfolioChange = '910.18';
  const portfolioPercent = 1.87;
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

      <S.StatsWrapper>
        <S.Stat>
          <S.MoneyField>${!isHidden ? totalBalance : hidden}</S.MoneyField>
          <S.TextField>Total Balance</S.TextField>
        </S.Stat>
        <S.Stat>
          <S.MoneyField>${!isHidden ? portfolioChange : hidden}</S.MoneyField>
          <S.TextAndColorWrapper>
            <S.TextField>24h Portfolio Change</S.TextField>
            {isHidden ? (
              <S.TextField>{hidden}</S.TextField>
            ) : (
              <S.ColoredText isPositive={checkPositive(portfolioPercent)}>
                ({checkPositive(portfolioPercent) ? '+' : ''}
                {portfolioPercent}%)
              </S.ColoredText>
            )}
          </S.TextAndColorWrapper>
        </S.Stat>
      </S.StatsWrapper>
    </S.PortFolioStatsWrapper>
  );
};

export default PortfolioStats;
