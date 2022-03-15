// @ts-nocheck

import React, { forwardRef, LegacyRef, useEffect, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const CustomButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  font-size: 20px;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
   background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

  &:focus {
  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}
`;

const CustomInput = forwardRef(({ value, onClick }, ref: any) => {
  return (
    <CustomButton type='button' className='' onClick={onClick} ref={ref}>
      {value}
    </CustomButton>
  );
});

export const DatePickerField = ({ ...props }) => {
  const [startDate, setStartDate] = useState(new Date());

  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={startDate}
      value={startDate}
      maxDate={new Date()}
      onChange={(val) => {
        setStartDate(val ? val : new Date());
        setFieldValue(field.name, val);
      }}
      customInput={<CustomInput />}
    />
  );
};

export default DatePickerField;
