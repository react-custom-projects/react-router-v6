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
				if (location?.state?.from?.pathname) {
					navigate(location.state.from.pathname, { replace: true });
				} else {
					navigate(getHomePageUrl(), { replace: true });
				}
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
