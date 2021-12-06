import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//routes
import { getProductPageUrl } from '../../routing/routingConstants/AppUrls';
//routes components
import RestrictedSection from './../../routing/routingComponents/RestrictedSection';

const ProductsPage = () => {
	const addProductHandler = () => {
		console.log('add product');
	};

	return (
		<div>
			<p>products page</p>
			<RestrictedSection requiredPermissions="add_product">
				<div style={{ backgroundColor: 'red', color: 'white', padding: 10 }}>
					<p>This is a restricted section</p>
					<button onClick={addProductHandler}>Add Product</button>
				</div>
			</RestrictedSection>
			<Link to={getProductPageUrl()}>Open Product</Link>
			<Outlet />
		</div>
	);
};

export default ProductsPage;
