import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import * as S from './date-details-form.styled';
import DatePickerField from './date-picker-field';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  prevStep: () => void;
  setDate: React.Dispatch<React.SetStateAction<number>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateDetailsForm: React.FC<Props> = ({ prevStep, setDate, setSubmit }) => {
  return (
    <Formik
      initialValues={{ date: new Date() }}
      validationSchema={Yup.object().shape({
        date: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const unixTimeStamp: number = Math.floor(values.date.getTime() / 1000);

        setDate(unixTimeStamp);
        setSubmit(true);

        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          isValid,
          values,
          touched,
          errors,
          isSubmitting,
          handleSubmit,
          setFieldValue,
        } = props;
        return (
          <S.Form onSubmit={handleSubmit}>
            <S.DateWrapper>
              <S.FieldName>Select date</S.FieldName>
              <DatePickerField name='date' />
              {errors.date && touched.date && (
                <S.InputFeedBack>{errors.date}</S.InputFeedBack>
              )}
            </S.DateWrapper>
            <S.ButtonsWrapper>
              <S.Button type='button' onClick={() => prevStep()}>
                Back
              </S.Button>
              <S.Button type='submit' disabled={isSubmitting || !isValid}>
                Submit
              </S.Button>
            </S.ButtonsWrapper>
          </S.Form>
        );
      }}
    </Formik>
  );
};

export default DateDetailsForm;
