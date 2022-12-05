import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectContactsIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectContactsFilter = (state: RootState) => state.filter;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectContactsFilter], (contacts, contactsFilter) => {
        const filteredContacts = contacts?.filter(({ name }) =>
            name.toLowerCase().includes(contactsFilter.toLowerCase())
        );

        return filteredContacts;
    }
);