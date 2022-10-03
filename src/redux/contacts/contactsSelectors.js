import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectContactsFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectContactsFilter], (contacts, contactsFilter) => {
        const filteredContacts = contacts?.filter(({ name }) =>
            name.toLowerCase().includes(contactsFilter.toLowerCase())
        );

        return filteredContacts;
    }
);