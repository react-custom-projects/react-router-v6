import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getProductPageUrl } from '../../routing/routingConstants/AppUrls';

const ProductsPage = () => {
	return (
		<div>
			<p>products page</p>
			<Link to={getProductPageUrl()}>Open Product</Link>
			<Outlet />
		</div>
	);
};

export default ProductsPage;
