import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message)
        };
    }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}: {name: string, number: string}, thunkAPI) => {
        try {
        const response = await axios.post("/contacts", {name, number});
            return response.data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id: string, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message)
        };
    }
);