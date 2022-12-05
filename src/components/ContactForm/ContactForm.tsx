import { Formik } from 'formik';
import * as yup from 'yup';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/hooksConfig';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import InputGroup from 'components/InputGroup/InputGroup';
import {
  StyledForm,
  StyledButton,
} from './ContactForm.styled';

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);

  const nameRegExp =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const phoneNumberRegExp =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('"Name" is a required field')
      .matches(
        nameRegExp,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ),
    number: yup
      .string()
      .required('"Number" is a required field')
      .matches(
        phoneNumberRegExp,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const onSubmitHandler = (
    value: { name: string; number: string },
    { resetForm }: { resetForm: any }
  ) => {
    const normalizedName = value.name.toLowerCase();

    contacts?.find(({ name }) => name.toLowerCase().includes(normalizedName))
      ? alert(`${value.name} is already in contacts.`)
      : dispatch(addContact({ ...value }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      <StyledForm>
        <InputGroup name={'name'} type={'text'} autoComplete={false} />
        <InputGroup name={'number'} type={'tel'} autoComplete={false} />

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
