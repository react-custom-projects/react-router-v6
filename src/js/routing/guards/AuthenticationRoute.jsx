import React from 'react';
import { Navigate } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//routes
import { getHomePageUrl } from '../routingConstants/AppUrls';

const AuthenticationRoute = ({ children }) => {
	if (!LocalStorageManager.getItem('token')) {
		return children;
	}

	return <Navigate replace to={getHomePageUrl()} />;
};

export default AuthenticationRoute;
