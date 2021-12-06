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

export const headerLinks = [
	{ path: getHomePageUrl(), label: 'Home', isAuth: true },
	{ path: getAboutPageUrl(), label: 'About', isAuth: false },
	{ path: getUserPageUrl(), label: 'User', isAuth: true },
	{
		path: getProductsPageUrl(),
		label: 'Products',
		isAuth: true,
	},
];

export const authenticationRoutes = [{ path: getLoginPageUrl(), element: <LoginPage /> }];

export const routes = [{ path: getAboutPageUrl(), element: <AboutPage />, label: 'About' }];

export const privateRoutes = [
	{ path: getHomePageUrl(), element: <HomePage />, label: 'Home' },
	{ path: getUserPageUrl(), element: <UserPage />, label: 'User' },
	{
		path: getProductsPageUrl(),
		element: <ProductsPage />,
		label: 'Products',
		children: [{ path: getProductPageUrl(), element: <ProductPage /> }],
	},
];
