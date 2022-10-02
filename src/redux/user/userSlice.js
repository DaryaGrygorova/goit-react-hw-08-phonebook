import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUser, signUp, logIn, logOut } from './userOperations';
import * as handles from './userHandles';

const actions = [fetchUser, signUp, logIn, logOut];

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: {},
    isLogIn: false,
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUser.fulfilled, handles.fetchUser)
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
