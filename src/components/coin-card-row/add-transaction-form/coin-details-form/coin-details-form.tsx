import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import * as S from './coin-details-form.styled';

interface Props {
  isPositiveState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  quantityState: [number, React.Dispatch<React.SetStateAction<number>>];
  nextStep: () => void;
}

const CoinDetailsForm: React.FC<Props> = ({
  isPositiveState,
  quantityState,
  nextStep,
}) => {
  return (
    <Formik
      initialValues={{
        isPositive: isPositiveState[0] ? 'Buy' : 'Sell',
        quantity: quantityState[0],
      }}
      validationSchema={Yup.object().shape({
        isPositive: Yup.string().required('Required'),
        quantity: Yup.number()
          .positive('Must be positive')
          .required('No quantity provided'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        Promise.resolve()
          .then(() =>
            isPositiveState[1](values.isPositive === 'Buy' ? true : false)
          )
          .then(() => quantityState[1](values.quantity))
          .then(() => nextStep());

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
          handleChange,
          handleSubmit,
          handleBlur,
        } = props;
        return (
          <S.Form onSubmit={handleSubmit}>
            <div>Quantity</div>
            <S.Input
              name='quantity'
              type='number'
              placeholder='Enter quantity'
              value={values.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                errors.quantity && touched.quantity
              } ? 'error' : ''`}
            />
            {errors.quantity && touched.quantity && (
              <S.InputFeedBack>{errors.quantity}</S.InputFeedBack>
            )}
            <br />
            <S.RadioButtonsWrapper>
              <S.RadioWrapper>
                <S.RadioInput
                  name='isPositive'
                  type='radio'
                  id={'buy'}
                  value={'Buy'}
                  checked={values.isPositive === 'Buy'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.isPositive && touched.isPositive
                  } ? 'error' : ''`}
                />
                <label>Buy</label>
              </S.RadioWrapper>
              <S.RadioWrapper>
                <S.RadioInput
                  name='isPositive'
                  type='radio'
                  value={'Sell'}
                  checked={values.isPositive === 'Sell'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.isPositive && touched.isPositive
                  } ? 'error' : ''`}
                />
                <label>Sell</label>
              </S.RadioWrapper>
            </S.RadioButtonsWrapper>
            {errors.isPositive && touched.isPositive && (
              <S.InputFeedBack>{errors.isPositive}</S.InputFeedBack>
            )}
            <S.NextButtonWrapper>
              <S.NextButton type='submit' disabled={isSubmitting || !isValid}>
                Next
              </S.NextButton>
            </S.NextButtonWrapper>
          </S.Form>
        );
      }}
    </Formik>
  );
};

export default CoinDetailsForm;
