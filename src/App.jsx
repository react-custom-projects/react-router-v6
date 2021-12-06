import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//routes
import {
	routes,
	privateRoutes,
	authenticationRoutes,
} from './js/routing/routingConstants/RoutesConfig';
//route guards
import PrivateRoute from './js/routing/guards/PrivateRoute';
import AuthenticationRoute from './js/routing/guards/AuthenticationRoute';
import { getHomePageUrl } from './js/routing/routingConstants/AppUrls';
//containers
import Header from './js/containers/Header';

const App = () => (
	<ErrorBoundary
		FallbackComponent={ErrorBoundaryFallback}
		onReset={() => {
			//Reset the state of your app so the error doesn't happen again
			console.log('Try again clicked');
		}}
	>
		<Header />
		<Routes>
			<Route path="/" element={<Navigate to={getHomePageUrl()} />} />
			{routes.map((el) => (
				<Route key={el.path} path={el.path} element={el.element}>
					{el.children &&
						el.children.map((innerEl) => (
							<Route key={innerEl.path} path={innerEl.path} element={innerEl.element} />
						))}
				</Route>
			))}
			{authenticationRoutes.map((el) => (
				<Route
					key={el.path}
					path={el.path}
					element={<AuthenticationRoute>{el.element}</AuthenticationRoute>}
				/>
			))}
			{privateRoutes.map((el) => (
				<Route key={el.path} path={el.path} element={<PrivateRoute>{el.element}</PrivateRoute>}>
					{el.children &&
						el.children.map((innerEl) => (
							<Route key={innerEl.path} path={innerEl.path} element={innerEl.element} />
						))}
				</Route>
			))}
			<Route path="*" element={<p style={{ color: 'red' }}>Page not found</p>} />
		</Routes>
	</ErrorBoundary>
);

export default hot(App);
