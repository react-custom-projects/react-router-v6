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
	{ path: getHomePageUrl(), element: <HomePage /> },
	{ path: getAboutPageUrl(), element: <AboutPage /> },
	{ path: getUserPageUrl(), element: <UserPage /> },
	{
		path: getProductsPageUrl(),
		element: <ProductsPage />,
		children: [{ path: getProductPageUrl(), element: <ProductPage /> }],
	},
];
