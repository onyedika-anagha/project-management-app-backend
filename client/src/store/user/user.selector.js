import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
export const selectIsLoggedIn = createSelector(
  [selectUserReducer],
  (user) => user.isLoggedIn
);

export const selectIsLoading = createSelector(
  [selectUserReducer],
  (user) => user.isLoading
);
