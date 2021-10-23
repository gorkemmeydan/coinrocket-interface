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
  margin-top: 10px;
  display: block;
  width: 100%;
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px 0;
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
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: rgb(70, 153, 179);
  color: white;
  background: linear-gradient(45deg, #102eff, #d2379b);

  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
