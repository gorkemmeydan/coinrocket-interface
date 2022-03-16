import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  background: var(--background);
  color: var(--text);
  border: 2px solid var(--text);

  margin-top: 10px;
  display: block;
  width: 100%;
  border-radius: 4px;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
  font-size: 16px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  display: block;
  border: 0;
  color: #fff;
  line-height: 50px;
  height: 3rem;
  width: 1.5rem;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const InputFeedBack = styled.div`
  color: red;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
`;

export const NextButton = styled.button`
  display: block;
  width: 30%;
  padding: 10px 15px;
  color: white;
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
