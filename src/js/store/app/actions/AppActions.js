//managers
import LocalStorageManager from './../../../managers/LocalStorageManger';
//action types
import { SET_APP_IS_LOGGED_IN_TRUE, SET_APP_IS_LOGGED_IN_FALSE } from '../appActionTypes';
//constants
import { localStorageKeys } from './../../../constants/Constants';

const setAppIsLoggedInTrue = () => ({ type: SET_APP_IS_LOGGED_IN_TRUE });

const setAppIsLoggedInFalse = () => ({ type: SET_APP_IS_LOGGED_IN_FALSE });

export const logUserIn = (callback) => (dispatch) => {
	dispatch(setAppIsLoggedInTrue());
	LocalStorageManager.setItem(localStorageKeys.token, 'dummy_token');
	callback();
};

export const logUserOut = (callback) => (dispatch) => {
	dispatch(setAppIsLoggedInFalse());
	LocalStorageManager.removeItem(localStorageKeys.token);
	callback();
};
