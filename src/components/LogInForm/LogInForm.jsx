import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Notification from 'components/Notification';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/userOperations';
import useAuth from 'hooks/useAuth';

import { StyledForm, Input, StyledButton } from './LogInForm.styled';

const LogInForm = () => {
  const dispatch = useDispatch();
  const { isError } = useAuth();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('"E-mail" is a required field')
      .matches(emailRegExp, 'The E-mail is invalid'),
    password: yup
      .string()
      .required('"Password" is a required field')
      .matches(
        passwordRegExp,
        'The password must contain only latin letters and numbers. It must contain at least one lowercase character and one uppercase character. Password length is at least 8 characters.'
      ),
  });

  const onSubmitHandler = (value, { resetForm }) => {
    dispatch(logIn({ ...value }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      <StyledForm>
        <label htmlFor={emailInputId}>E-mail</label>
        <Input id={emailInputId} type="email" name="email" autoComplete="off" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <label htmlFor={passwordInputId}>Password</label>
        <Input
          id={passwordInputId}
          type="password"
          name="password"
          autoComplete="off"
        />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: 'red' }}
        />

        <StyledButton type="submit">Log in</StyledButton>

        {!!isError && !isError.includes('401') && (
          <Notification error message="Something wrong... Please, try again" />
        )}
      </StyledForm>
    </Formik>
  );
};

export default LogInForm;
