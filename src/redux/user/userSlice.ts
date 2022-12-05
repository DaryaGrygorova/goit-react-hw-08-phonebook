import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, signUp, logIn, logOut } from './userOperations';
import * as handles from './userHandles';
import { UserStateType } from 'types/types';

const initialState: UserStateType = {
  profile: { email: '', name: '' },
  isLogIn: false,
  token: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserError(state) {
      return {
      ...state,
      error: null}
    },
  },
  extraReducers: {
    [fetchCurrentUser.pending.toString()]: state => {
      handles.pending(state);
    },
    [fetchCurrentUser.fulfilled.toString()]: (state, action) => {
      handles.fetchUser(state, action);
      handles.fulfilled(state);
    },
    [fetchCurrentUser.rejected.toString()]: (state, action) => {
      handles.rejected(state, action);
    },
    [signUp.pending.toString()]: state => {
      handles.pending(state);
    },
    [signUp.fulfilled.toString()]: (state, action) => {
      handles.singUp(state, action);
      handles.fulfilled(state);
    },
    [signUp.rejected.toString()]: (state, action) => {
      handles.rejected(state, action);
    },
    [logIn.pending.toString()]: state => {
      handles.pending(state);
    },
    [logIn.fulfilled.toString()]: (state, action) => {
      handles.logIn(state, action);
      handles.fulfilled(state);
    },
    [logIn.rejected.toString()]: (state, action) => {
      handles.rejected(state, action);
    },
    [logOut.pending.toString()]: state => {
      handles.pending(state);
    },
    [logOut.fulfilled.toString()]: state => {
      handles.logOut(state);
      handles.fulfilled(state);
    },
    [logOut.rejected.toString()]: (state, action) => {
      handles.rejected(state, action);
    },
  },
});

export const { setUserError } = userSlice.actions;