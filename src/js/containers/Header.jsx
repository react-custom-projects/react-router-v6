import React from 'react';
import { NavLink } from 'react-router-dom';
//routes config
import { routes } from '../routing/routingConstants/RoutesConfig';

const Header = () => (
	<header className="header">
		{routes.map((el) => (
			<NavLink
				key={el.path}
				to={el.path}
				className={(navData) => (navData.isActive ? 'active' : '')}
			>
				{el.label}
			</NavLink>
		))}
	</header>
);

export default Header;
