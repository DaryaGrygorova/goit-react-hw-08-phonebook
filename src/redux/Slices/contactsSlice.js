import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';
import * as handles from './contactsHandles';

const actions = [fetchContacts, addContact, deleteContact];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handles.fetchItems)
      .addCase(addContact.fulfilled, handles.addItem)
      .addCase(deleteContact.fulfilled, handles.deleteItem)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handles.fulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handles.pending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handles.rejected
      ),
});
