import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6337eadc132b46ee0be72fd7.mockapi.io/api'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        };
    }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, thunkAPI) => {
        try {
        const response = await axios.post("/contacts", {name, phone: number});
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        };
    }
);
