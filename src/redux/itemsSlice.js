
import { createSlice } from "@reduxjs/toolkit";

const initialItems = [
   { id: 1, name: 'Sara Grey', number: '485123 453215'},
   { id: 2, name: 'Kris Dreams ', number: '485123 453215'},
   { id: 3, name: 'Grey Panda', number: '485123 453215'},
   { id: 4, name: 'Fox Red', number: '485123 453215'},
];

export const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItems,
    reducers: {
        addContact(state, action) {
            state.push(action.payload)

        },
        deleteContact(state, action) {
          return state.filter(({ id }) => id !== action.payload);
        },
    }
});

export const { addContact, deleteContact } = itemsSlice.actions;