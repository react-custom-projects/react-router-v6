import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//routes
import { getLoginPageUrl } from '../routingConstants/AppUrls';
//constants
import { localStorageKeys } from './../../constants/Constants';

const PrivateRoute = ({ children }) => {
	const location = useLocation();

	if (LocalStorageManager.getItem(localStorageKeys.token)) {
		return children;
	}

	return <Navigate replace to={getLoginPageUrl()} state={{ from: location }} />;
};

export default PrivateRoute;
