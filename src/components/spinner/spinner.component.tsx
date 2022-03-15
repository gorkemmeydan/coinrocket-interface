import React from 'react';

import * as S from './spinner.styled';

const Spinner: React.FC = () => {
  return (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  );
};

export default Spinner;
