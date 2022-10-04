const selectIsLogIn = state => state.user.isLogIn;
const selectUserProfile = state => state.user.profile;
const selectUserError = state => state.user.error;

export const userAuthSelector = {
  selectIsLogIn,
  selectUserProfile,
  selectUserError,
};
