import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//routes
import { getLoginPageUrl } from '../routing/routingConstants/AppUrls';
//routes config
import { headerLinks } from '../routing/routingConstants/RoutesConfig';
//routes components
import RestrictedSection from '../routing/routingComponents/RestrictedSection';
//actions
import { logUserOut } from '../store/app/actions/AppActions';
//selectors
import { getAppIsLoggedIn } from '../store/app/selectors/AppSelectors';

const Header = () => {
	const dispatch = useDispatch(),
		isLoggedIn = useSelector((state) => getAppIsLoggedIn({ state })),
		navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(
			logUserOut(() => {
				navigate(getLoginPageUrl(), { replace: true });
			})
		);
	};

	const renderLink = ({ to, label }) => (
		<NavLink to={to} className={(navData) => (navData.isActive ? 'active' : '')}>
			{label}
		</NavLink>
	);

	return (
		<header className="header">
			<nav>
				<ul>
					{headerLinks.map((el) => (
						<li key={el.path}>
							{((el.isAuth && isLoggedIn) || (!el.isAuth && !isLoggedIn) || el.isNeutral) && (
								<>
									{el.permissions ? (
										<RestrictedSection requiredPermissions={el.permissions}>
											{renderLink({ to: el.path, label: el.label })}
										</RestrictedSection>
									) : (
										renderLink({ to: el.path, label: el.label })
									)}
								</>
							)}
						</li>
					))}
					<li className="spacer" />
					<li>{isLoggedIn && <button onClick={logoutHandler}>Logout</button>}</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
