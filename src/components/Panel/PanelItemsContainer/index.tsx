import React from 'react';

import {
  AiFillAppstore,
  AiFillWallet,
  AiOutlineBarChart,
  AiFillMail,
} from 'react-icons/ai';

import LeftPanelItem from '../PanelItem';

import * as S from './PanelItemsContainer.styled';

interface PanelItemsContainerProps {
  isFullSize: boolean;
  isTop: boolean;
}

const PanelItemsContainer: React.FC<PanelItemsContainerProps> = ({
  isFullSize,
  isTop,
}: PanelItemsContainerProps) => {
  const iconSize = '30';

  return (
    <S.PanelItemsContainerWrapper isTop={isTop}>
      <LeftPanelItem
        displayText={isFullSize}
        icon={<AiFillAppstore size={iconSize} />}
        text={'Dashboard'}
        linkPath={'/app/dashboard'}
      />
      <LeftPanelItem
        displayText={isFullSize}
        icon={<AiFillWallet size={iconSize} />}
        text={'Portfolio'}
        linkPath={'/app/portfolio'}
      />
      <LeftPanelItem
        displayText={isFullSize}
        icon={<AiOutlineBarChart size={iconSize} />}
        text={'Market'}
        linkPath={'/app/market'}
      />
      <LeftPanelItem
        displayText={isFullSize}
        icon={<AiFillMail size={iconSize} />}
        text={'News'}
        linkPath={'/app/news'}
      />
    </S.PanelItemsContainerWrapper>
  );
};

export default PanelItemsContainer;
