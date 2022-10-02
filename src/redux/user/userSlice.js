import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCurrentUser, signUp, logIn, logOut } from './userOperations';
import * as handles from './userHandles';

const actions = [fetchCurrentUser, signUp, logIn, logOut];

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {email:'', name:''},
    isLogIn: false,
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCurrentUser.fulfilled, handles.fetchUser)
      .addCase(signUp.fulfilled, handles.singUp)
      .addCase(logIn.fulfilled, handles.logIn)
      .addCase(logOut.fulfilled, handles.logOut)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handles.fulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handles.pending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handles.rejected
      ),
});
