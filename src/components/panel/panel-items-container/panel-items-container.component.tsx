import React from 'react';

import {
  AiFillAppstore,
  AiFillWallet,
  AiOutlineBarChart,
  AiFillMail,
  AiFillSetting,
} from 'react-icons/ai';

import LeftPanelItem from '../panel-item/panel-item.component';

import * as S from './panel-items-container.styled';

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
      <LeftPanelItem
        displayText={isFullSize}
        icon={<AiFillSetting size={iconSize} />}
        text={'Settings'}
        linkPath={'/app/settings'}
      />
    </S.PanelItemsContainerWrapper>
  );
};

export default PanelItemsContainer;