import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './Slicers/filterSlice';
import { contactsSlice } from './Slicers/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer
  },
});