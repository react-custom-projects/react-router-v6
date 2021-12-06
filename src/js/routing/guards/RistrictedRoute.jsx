import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
//managers
import LocalStorageManager from '../../managers/LocalStorageManger';
//components
import PermissionsCannotAccess from '../routingComponents/PermissionsCannotAccess';

const RestrictedRoute = ({ children, requiredPermissions }) => {
	const userPermissionsList = ['access_home', 'access_user', 'access_products'],
		location = useLocation();

	if (LocalStorageManager.getItem('token')) {
		if (Array.isArray(requiredPermissions)) {
			for (let i = 0; i < requiredPermissions.length; i++) {
				for (let j = 0; j < userPermissionsList.length; j++) {
					if (requiredPermissions[i] === userPermissionsList[j]) return children;
				}
			}
		}
		if (typeof requiredPermissions === 'string') {
			if (userPermissionsList.findIndex((permission) => permission === requiredPermissions) > -1)
				return children;
		}
		return <PermissionsCannotAccess requiredPermissions={requiredPermissions} />;
	} else {
		return <Navigate replace to={getLoginPageUrl()} state={{ from: location }} />;
	}
};

RestrictedRoute.propTypes = {
	requiredPermissions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default RestrictedRoute;
