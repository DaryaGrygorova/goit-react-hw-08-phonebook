import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Slicers/contactsSlice';

import { StyledForm, Label, Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

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
      : dispatch(addContact({ ...value, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      <StyledForm>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input id={nameInputId} type="text" name="name" autoComplete="off" />
        <ErrorMessage name="name" component="div" />

        <Label htmlFor={numberInputId}>Number</Label>
        <Input id={numberInputId} type="tel" name="number" autoComplete="off" />
        <ErrorMessage name="number" component="div" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
