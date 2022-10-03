const selectIsLogIn = state => state.user.isLogIn;
const selectUserProfile = state => state.user.profile;

export const userAuthSelector = {
    selectIsLogIn,
    selectUserProfile
};