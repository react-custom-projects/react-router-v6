import React, { Fragment } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//routes
import { getHomePageUrl, getLoginPageUrl } from '../routing/routingConstants/AppUrls';
//routes config
import { headerLinks } from '../routing/routingConstants/RoutesConfig';
//actions
import { logUserIn, logUserOut } from '../store/app/actions/AppActions';
//selectors
import { getAppIsLoggedIn } from '../store/app/selectors/AppSelectors';

const Header = () => {
	const dispatch = useDispatch(),
		isLoggedIn = useSelector((state) => getAppIsLoggedIn({ state })),
		navigate = useNavigate();

	const loginHandler = () => {
		dispatch(
			logUserIn(() => {
				navigate(getHomePageUrl(), { replace: true });
			})
		);
	};

	const logoutHandler = () => {
		dispatch(
			logUserOut(() => {
				navigate(getLoginPageUrl(), { replace: true });
			})
		);
	};

	return (
		<header className="header">
			{headerLinks.map((el) => (
				<Fragment key={el.path}>
					{((el.isAuth && isLoggedIn) || !el.isAuth) && (
						<NavLink to={el.path} className={(navData) => (navData.isActive ? 'active' : '')}>
							{el.label}
						</NavLink>
					)}
				</Fragment>
			))}
			{isLoggedIn ? (
				<button onClick={logoutHandler}>Logout</button>
			) : (
				<button onClick={loginHandler}>Login</button>
			)}
		</header>
	);
};

export default Header;
