import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { login } from '@services/api/login';

import { useAuth } from '@contexts/auth';

import * as S from './LoginForm.styled';

const LoginForm = () => {
  const { setEmail } = useAuth();
  const [loginErr, setLoginErr] = useState(false);
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    login({ email: email, password: password }).then((result) => {
      if (result) {
        // if logged in redirect to dashboard
        setEmail(email);
        router.push('/app/dashboard');
      } else {
        setLoginErr(true);
      }
    });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values.email, values.password);

        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string()
          .required('No password provided.')
          .min(6, 'Password is too short - should be 6 chars minimum.')
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
            />
            {errors.password && touched.password && (
              <S.InputFeedBack>{errors.password}</S.InputFeedBack>
            )}
            <S.LoginButton type='submit' disabled={isSubmitting}>
              Login
            </S.LoginButton>
            {loginErr && (
              <S.InputFeedBack>Invalid email or password</S.InputFeedBack>
            )}
          </S.Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
