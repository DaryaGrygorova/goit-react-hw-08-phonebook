import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/contacts/contactsSelectors';

import { Form, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(selectContactsFilter);

  const onChangeHandle = e => dispatch(setFilter(e.currentTarget.value));
  const dispatch = useDispatch();

  return (
    <Form as="form">
      <label htmlFor="contactsFilter">Find contacts by name </label>

      <Input
        id="contactsFilter"
        type="text"
        name="filter"
        value={value}
        onChange={onChangeHandle}
        autoComplete="off"
      />
    </Form>
  );
};

export default Filter;
