import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';

import { StyledForm, Label, Input, StyledButton } from './RegisterForm.styled';
import { signUp } from '../../redux/user/userOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('"Name" is a required field')
      .matches(
        nameRegExp,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ),
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
    dispatch(signUp({ ...value }));
    console.log({ ...value });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      <StyledForm>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input id={nameInputId} type="text" name="name" autoComplete="off" />
        <ErrorMessage name="name" component="div" />

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

        <StyledButton type="submit">Sign up</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
