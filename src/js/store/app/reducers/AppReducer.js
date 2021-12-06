//action types
import { SET_APP_IS_LOGGED_IN_TRUE, SET_APP_IS_LOGGED_IN_FALSE } from '../appActionTypes';
//constants
import { updateObject } from '../../../constants/Helpers';
import { localStorageKeys } from './../../../constants/Constants';
//managers
import LocalStorageManager from './../../../managers/LocalStorageManger';

const initialState = {
	isLoggedIn: LocalStorageManager.getItem(localStorageKeys.token) !== null,
	userPermissionsList: ['access_home', 'access_user', 'access_products', 'add_product'],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_APP_IS_LOGGED_IN_TRUE: {
			return updateObject(state, { isLoggedIn: true });
		}
		case SET_APP_IS_LOGGED_IN_FALSE: {
			return updateObject(state, { isLoggedIn: false });
		}
		default:
			return state;
	}
};

export default reducer;
