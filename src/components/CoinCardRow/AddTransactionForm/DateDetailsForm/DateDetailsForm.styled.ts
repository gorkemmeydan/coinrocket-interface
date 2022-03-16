import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 100%;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FieldName = styled.div`
  color: var(--text);
  font-size: 24px;
  width: 30%;
  margin-bottom: 5px;
`;

export const InputFeedBack = styled.div`
  color: red;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  display: block;
  width: 30%;
  padding: 10px 15px;
  background-color: rgb(70, 153, 179);
  color: var(--text);
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);

  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
