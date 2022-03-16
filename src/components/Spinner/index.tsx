import React from 'react';

import * as S from './Spinner.styled';

const Spinner: React.FC = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  );
};

export default Spinner;
