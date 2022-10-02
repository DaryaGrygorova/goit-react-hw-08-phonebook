import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().user.token;
      if (!persistedToken) {
        throw new Error('Unauthorized user');
      }
      token.set(thunkAPI.getState().user.token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/logIn', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/logout`);
      token.unset();
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
