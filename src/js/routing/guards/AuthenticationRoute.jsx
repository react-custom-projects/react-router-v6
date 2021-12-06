import React from 'react';
import { Navigate } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//routes
import { getHomePageUrl } from '../routingConstants/AppUrls';
//constants
import { localStorageKeys } from './../../constants/Constants';

const AuthenticationRoute = ({ children }) => {
	if (!LocalStorageManager.getItem(localStorageKeys.token)) {
		return children;
	}

	return <Navigate replace to={getHomePageUrl()} />;
};

export default AuthenticationRoute;
