import React from 'react';

import * as S from './with-spinner.styled';

interface SpinnerProps {
  isLoading: boolean;
}

const WithSpinner = (WrappedComponent: React.FC) => {
  const Spinner = ({ isLoading, ...otherProps }: SpinnerProps) => {
    return isLoading ? (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
