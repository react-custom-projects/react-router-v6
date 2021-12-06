import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
//routes
import { getHomePageUrl } from '../../routing/routingConstants/AppUrls';
//actions
import { logUserIn } from '../../store/app/actions/AppActions';

const LoginPage = () => {
	const dispatch = useDispatch(),
		location = useLocation(),
		navigate = useNavigate();

	const loginHandler = () => {
		dispatch(
			logUserIn(() => {
				navigate(
					location?.state?.from?.pathname ? location.state.from.pathname : getHomePageUrl(),
					{ replace: true }
				);
			})
		);
	};

	return (
		<div>
			<p>login page</p>
			<button onClick={loginHandler}>Login</button>
		</div>
	);
};

export default LoginPage;
