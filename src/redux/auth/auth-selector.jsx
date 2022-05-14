const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
// console.log(getUsername)

export const authSelectors = {
    getIsLoggedIn,
    getUsername,
};