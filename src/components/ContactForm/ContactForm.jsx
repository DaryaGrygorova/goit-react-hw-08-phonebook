import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { StyledForm, Input, StyledButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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

  const onSubmitHandler = (value, { resetForm }) => {
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
        <label htmlFor={nameInputId}>Name</label>
        <Input id={nameInputId} type="text" name="name" autoComplete="off" />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

        <label htmlFor={numberInputId}>Number</label>
        <Input id={numberInputId} type="tel" name="number" autoComplete="off" />
        <ErrorMessage name="number" component="div" style={{ color: 'red' }} />

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
