import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import * as S from './SignupForm.styled';

const SignUpForm = () => (
  <Formik
    initialValues={{ email: '', password: '', passwordConfirmation: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            name='email'
            type='text'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${errors.email && touched.email} ? 'error' : ''`}
          />
          {errors.email && touched.email && (
            <S.InputFeedBack>{errors.email}</S.InputFeedBack>
          )}
          <S.Input
            name='password'
            type='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            // className={errors.password && touched.password && 'error'}
          />
          {errors.password && touched.password && (
            <S.InputFeedBack>{errors.password}</S.InputFeedBack>
          )}
          <S.Input
            name='passwordConfirmation'
            type='password'
            placeholder='Re-enter your password'
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            // className={errors.password && touched.password && 'error'}
          />
          {errors.passwordConfirmation && touched.passwordConfirmation && (
            <S.InputFeedBack>{errors.passwordConfirmation}</S.InputFeedBack>
          )}
          <S.LoginButton type='submit' disabled={isSubmitting}>
            Sign Up
          </S.LoginButton>
        </S.Form>
      );
    }}
  </Formik>
);

export default SignUpForm;
