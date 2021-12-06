import React from 'react';
//urls
import {
	getAboutPageUrl,
	getHomePageUrl,
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

export const routes = [
	{ path: getHomePageUrl(), element: <HomePage />, label: 'Home' },
	{ path: getAboutPageUrl(), element: <AboutPage />, label: 'About' },
	{ path: getUserPageUrl(), element: <UserPage />, label: 'User' },
	{
		path: getProductsPageUrl(),
		element: <ProductsPage />,
		label: 'Products',
		children: [{ path: getProductPageUrl(), element: <ProductPage /> }],
	},
];
