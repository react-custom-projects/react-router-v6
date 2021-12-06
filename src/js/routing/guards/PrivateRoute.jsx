import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//routes
import { getLoginPageUrl } from '../routingConstants/AppUrls';

const PrivateRoute = ({ children }) => {
	const location = useLocation();

	if (LocalStorageManager.getItem('token')) {
		return children;
	}

	return <Navigate replace to={getLoginPageUrl()} state={{ from: location }} />;
};

export default PrivateRoute;
