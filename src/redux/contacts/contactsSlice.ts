import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import * as handles from './contactsHandles';
import { ContactStateType } from 'types/types';

const initialState: ContactStateType = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending.toString()]: state =>{
      handles.pending(state);
    },
    [fetchContacts.fulfilled.toString()]: (state, action) =>{
      handles.fetchItems(state, action);
      handles.fulfilled(state);
    },
    [fetchContacts.rejected.toString()]: (state, action) =>{
      handles.rejected(state, action);
    },
    [addContact.pending.toString()]: state =>{
      handles.pending(state);
    },
    [addContact.fulfilled.toString()]: (state, action) =>{
      handles.addItem(state, action);
      handles.fulfilled(state);
    },
    [addContact.rejected.toString()]: (state, action) =>{
      handles.rejected(state, action);
    },
    [deleteContact.pending.toString()]: state =>{
      handles.pending(state);
    },
    [deleteContact.fulfilled.toString()]: (state, action) =>{
      handles.deleteItem(state, action);
      handles.fulfilled(state);
    },
    [deleteContact.rejected.toString()]: (state, action) =>{
      handles.rejected(state, action);
    },
  }
});
