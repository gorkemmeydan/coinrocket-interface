import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import * as S from './login-form.styled';

const LoginForm = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('Logging in', values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
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
          <S.LoginButton type='submit' disabled={isSubmitting}>
            Login
          </S.LoginButton>
        </S.Form>
      );
    }}
  </Formik>
);

export default LoginForm;
