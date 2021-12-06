//managers
import LocalStorageManager from './../../../managers/LocalStorageManger';
//action types
import { SET_APP_IS_LOGGED_IN_TRUE, SET_APP_IS_LOGGED_IN_FALSE } from '../appActionTypes';

const setAppIsLoggedInTrue = () => ({ type: SET_APP_IS_LOGGED_IN_TRUE });

const setAppIsLoggedInFalse = () => ({ type: SET_APP_IS_LOGGED_IN_FALSE });

export const logUserIn = (callback) => (dispatch) => {
	dispatch(setAppIsLoggedInTrue());
	LocalStorageManager.setItem('token', 'dummy_token');
	callback();
};

export const logUserOut = (callback) => (dispatch) => {
	dispatch(setAppIsLoggedInFalse());
	LocalStorageManager.removeItem('token');
	callback();
};
