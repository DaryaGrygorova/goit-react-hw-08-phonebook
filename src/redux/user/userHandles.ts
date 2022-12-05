import { UserStateType } from "types/types";

export const pending = (state: UserStateType) => {
  state.isLoading = true;
};

export const fulfilled = (state: UserStateType) => {
  state.isLoading = false;
  state.error = null;
};

export const rejected = (state: UserStateType, action: any) => {
  state.isLoading = false;
  if (action.payload !== 'Unauthorized'){
  state.error = action.payload;}
};

export const fetchUser = (state: UserStateType, action: any) => {
  state.profile = action.payload;
  state.isLogIn = true;
};

export const singUp = (state: UserStateType, action: any) => {
  state.token = action.payload.token;
  state.profile = action.payload.user;
  state.isLogIn = true;
};
  
export const logIn = (state: UserStateType, action: any) => {
  state.token = action.payload.token;
  state.profile = action.payload.user;
  state.isLogIn = true;
};

export const logOut = (state: UserStateType) => {
  state.token = null;
  state.profile = {email:'', name:''};
  state.isLogIn = false;
};

