import { Formik } from 'formik';
import * as yup from 'yup';

import Notification from 'components/Notification';
import InputGroup from 'components/InputGroup';

import { useAppDispatch } from 'hooks/hooksConfig';
import { logIn } from 'redux/user/userOperations';
import useAuth from 'hooks/useAuth';

import { StyledForm, StyledButton } from './LogInForm.styled';
import { LoginFormValuesType } from 'types/types';

const LogInForm = () => {
  const dispatch = useAppDispatch();
  const { isError } = useAuth();

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

  const onSubmitHandler = (value: LoginFormValuesType, { resetForm }: { resetForm: any }) => {
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
        <InputGroup name={"email"} type={"email"} autoComplete={false} />
        <InputGroup name={"password"} type={"password"} autoComplete={false} />

        <StyledButton type="submit">Log in</StyledButton>

        {!!isError && !isError.includes('401') && (
          <Notification message={`Something wrong..${isError ? isError : ''}. Please, try another email`} />
        )}
      </StyledForm>
    </Formik>
  );
};

export default LogInForm;
