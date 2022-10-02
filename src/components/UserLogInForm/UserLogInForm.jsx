import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';

import { StyledForm, Label, Input, Button } from './UserLogInForm.styled';
import { logIn } from '../../redux/user/userOperations';

const UserLogInForm = () => {
  const dispatch = useDispatch();

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
        'The password must contain only letters and numbers. It must contain at least one lowercase character and one uppercase character. Password length is at least 8 characters.'
      ),
  });

  const onSubmitHandler = (value, { resetForm }) => {
    dispatch(logIn({ ...value }));
    console.log({ ...value });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      <StyledForm>
        <Label htmlFor={emailInputId}>E-mail</Label>
        <Input id={emailInputId} type="email" name="email" autoComplete="off" />
        <ErrorMessage name="email" component="div" />

        <Label htmlFor={passwordInputId}>Password</Label>
        <Input
          id={passwordInputId}
          type="password"
          name="password"
          autoComplete="off"
        />
        <ErrorMessage name="password" component="div" />

        <Button type="submit">Log in</Button>
      </StyledForm>
    </Formik>
  );
};

export default UserLogInForm;
