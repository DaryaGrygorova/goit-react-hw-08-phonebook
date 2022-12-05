import { Formik } from 'formik';
import * as yup from 'yup';

import Notification from 'components/Notification';
import InputGroup from 'components/InputGroup';

import { useAppDispatch } from 'hooks/hooksConfig';
import { signUp } from '../../redux/user/userOperations';
import useAuth from 'hooks/useAuth';

import { StyledForm, StyledButton} from './RegisterForm.styled';
import { RegisterFormValuesType } from 'types/types';

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const  { isError } = useAuth();


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

  const onSubmitHandler = (value: RegisterFormValuesType, { resetForm }: { resetForm: any }) => {
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
        <InputGroup name={"name"} type={"text"} autoComplete={false} />
        <InputGroup name={"email"} type={"email"} autoComplete={false} />
        <InputGroup name={"password"} type={"password"} autoComplete={false} />

        <StyledButton type="submit">Sign up</StyledButton>

        {!!isError && !isError?.includes('401') && (
          <Notification
            message={`Something wrong..${isError ? isError : ''}. Please, try another email`}
          />
        )}
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
