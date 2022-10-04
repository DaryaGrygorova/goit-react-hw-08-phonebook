import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/user/userOperations';

import { StyledForm, Input, StyledButton } from './RegisterForm.styled';

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
        'The password must contain only latin letters and numbers. It must contain at least one lowercase character and one uppercase character. Password length is at least 8 characters.'
      ),
  });

  const onSubmitHandler = (value, { resetForm }) => {
    dispatch(signUp({ ...value }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      <StyledForm>
        <label htmlFor={nameInputId}>Name</label>
        <Input id={nameInputId} type="text" name="name" autoComplete="off" />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

        <label htmlFor={emailInputId}>E-mail</label>
        <Input id={emailInputId} type="email" name="email" autoComplete="off" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <label htmlFor={passwordInputId}>Password</label>
        <Input
          id={passwordInputId}
          type="password"
          name="password"
          autoComplete="off"
          label="password"
        />
        <ErrorMessage
          name="password"
          component="div"
          style={{ color: 'red' }}
        />

        <StyledButton type="submit">Sign up</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
