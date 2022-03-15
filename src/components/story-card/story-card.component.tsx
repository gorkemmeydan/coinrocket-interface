import React from 'react';
import * as S from './story-card.styled';

interface StoryCardProps {
  cardText: string;
  CardImage: React.FC;
}

const StoryCard: React.FC<StoryCardProps> = ({
  cardText,
  CardImage,
}: StoryCardProps) => {
  return (
    <S.CardContainer>
      <S.CardText>{cardText}</S.CardText>
      <S.CardImage>
        <CardImage />
      </S.CardImage>
    </S.CardContainer>
  );
};

export default StoryCard;
