import styled from 'styled-components';

export const LoginContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 60px 68px 40px;
  min-height: 660px;
`;

export const QueryMessage = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const LoginTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const RedirectToSignUpWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const RedirectInfoText = styled.div`
  color: #8c8c8c;
`;

export const RedirectToSignUpText = styled.div`
  color: white;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
