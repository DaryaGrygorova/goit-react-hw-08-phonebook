export const pending = (state, action) => {
  state.isLoading = true;
};

export const fulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const rejected = (state, action) => {
  state.isLoading = false;
  console.log(action.payload)
  debugger;
  state.error = action.payload;
};

export const fetchUser = (state, action) => {
  state.profile = action.payload;
    state.isLogIn = true;
};

export const singUp = (state, action) => {
  state.token = action.payload.token;
  state.profile = action.payload.user;
  state.isLogIn = true;
};
  
export const logIn = (state, action) => {
  state.token = action.payload.token;
  state.profile = action.payload.user;
  state.isLogIn = true;
};

export const logOut = (state, action) => {
  state.token = null;
  state.profile = {};
  state.isLogIn = false;
};

