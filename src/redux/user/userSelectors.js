const selectIsLogIn = state => state.user.isLogIn;
const selectToken = state => state.user.token;
const selectUserProfile = state => state.user.profile;

export const userAuthSelector = {
    selectIsLogIn,
    selectToken,
    selectUserProfile
};