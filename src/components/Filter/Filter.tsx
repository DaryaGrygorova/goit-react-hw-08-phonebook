import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import {
  selectContactsFilter,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSelectors';

import { Form, Input } from './Filter.styled';
import { useEffect } from 'react';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectContactsFilter);
  const isContactsLoading = useSelector(selectContactsIsLoading);

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
    dispatch(setFilter(e.currentTarget.value));
  };

  useEffect(() => {
    if (isContactsLoading) {
      dispatch(setFilter(''));
    }
  }, [dispatch, isContactsLoading]);

  return (
    <Form as="form" onSubmit={e => e.preventDefault()}>
      <label htmlFor="contactsFilter">Find contacts by name </label>

      <Input
        id="contactsFilter"
        type="text"
        name="filter"
        value={value}
        onChange={onChangeHandle}
        autoComplete="off"
        color="secondary"
        size="small"
      />
    </Form>
  );
};

export default Filter;
