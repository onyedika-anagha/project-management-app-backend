// import { createAction } from "@reduxjs/toolkit";
import { getUsers, signOutUser } from "../../utils/firebase/firebase.utils";
import { alertMessage } from "../../utils/initial-state/initial-state";
import { userActions } from "./user.slice";
import { fetchStore } from "../user-store/store-action";

export const setCurrentUser = (user) => userActions.setCurrentUser(user);

export const setIsLoggedIn = (boolean) => userActions.setIsLoggedIn(boolean);

export const setIsLoading = (boolean) => userActions.setIsLoading(boolean);

export const _login = (user) => {
  return async (dispatch) => {
    dispatch(setCurrentUser(user));
    dispatch(setIsLoggedIn(true));
    dispatch(setIsLoading(false));
  };
};

export const _logout = () => {
  return async (dispatch) => {
    dispatch(userActions.logout());
  };
};
export const fetchUser = (userData) => async (dispatch) => {
  try {
    const user = await getUsers(userData);
    // console.log();
    if (user.userType !== "none") {
      // console.log();#
      dispatch(fetchStore(userData.uid, user.userType));
      dispatch(_login(user));
    } else {
      alertMessage("error", "user is not an admin");
    }
  } catch (error) {
    signOutUser();
    console.log(error);
  }
};
