import React from 'react';

import Panel from '../../components/panel/panel.component';

import * as S from './app.styled';

interface Props {
  size: 'large' | 'medium' | 'small' | 'mobile';
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ size, children }: Props) => {
  if (size === 'large') {
    return (
      <S.Row>
        <Panel isFullSize={true} isTop={false} />
        {children}
      </S.Row>
    );
  } else if (size === 'medium') {
    return (
      <S.Row>
        <Panel isFullSize={true} isTop={false} />
        {children}
      </S.Row>
    );
  } else if (size === 'small') {
    return (
      <S.Row>
        <Panel isFullSize={false} isTop={false} />
        {children}
      </S.Row>
    );
  } else if (size === 'mobile') {
    return (
      <S.Column>
        <Panel isFullSize={false} isTop={true} />;{children}
      </S.Column>
    );
  } else {
    // Fallback to full size application
    return (
      <S.Row>
        <Panel isFullSize={true} isTop={false} />
        {children}
      </S.Row>
    );
  }
};

export default AppLayout;
