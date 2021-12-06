import React from 'react';
//urls
import {
	getAboutPageUrl,
	getHomePageUrl,
	getLoginPageUrl,
	getProductPageUrl,
	getProductsPageUrl,
	getUserPageUrl,
} from './AppUrls';
//pages
import AboutPage from '../../containers/pages/AboutPage';
import HomePage from '../../containers/pages/HomePage';
import ProductPage from '../../containers/pages/ProductPage';
import ProductsPage from '../../containers/pages/ProductsPage';
import UserPage from '../../containers/pages/UserPage';
import LoginPage from '../../containers/pages/LoginPage';

//isAuth is used to render links if user is logged in
export const headerLinks = [
	{ path: getHomePageUrl(), label: 'Home', permissions: 'access_home', isAuth: true },
	{ path: getAboutPageUrl(), label: 'About', isNeutral: true },
	{ path: getUserPageUrl(), label: 'User', permissions: 'access_user', isAuth: true },
	{
		path: getProductsPageUrl(),
		label: 'Products',
		permissions: 'access_products',
		isAuth: true,
	},
	{ path: getLoginPageUrl(), label: 'Login', isAuth: false },
];

export const authenticationRoutes = [{ path: getLoginPageUrl(), element: <LoginPage /> }];

export const routes = [{ path: getAboutPageUrl(), element: <AboutPage />, label: 'About' }];

export const privateRoutes = [
	{ path: getHomePageUrl(), element: <HomePage />, label: 'Home', permissions: 'access_home' },
	{ path: getUserPageUrl(), element: <UserPage />, label: 'User', permissions: 'access_user' },
	{
		path: getProductsPageUrl(),
		element: <ProductsPage />,
		label: 'Products',
		permissions: 'access_products',
		children: [{ path: getProductPageUrl(), element: <ProductPage /> }],
	},
];
