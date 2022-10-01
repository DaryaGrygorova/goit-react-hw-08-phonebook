import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Slices/filterSlice';
import { contactsSlice } from './Slices/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer
  },
});