import React, { lazy } from 'react';
import { hot } from 'react-hot-loader/root';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getHomePageUrl } from './js/routing/routingConstants/AppUrls';
import { routes } from './js/routing/routingConstants/RoutesConfig';

const App = () => (
	<ErrorBoundary
		FallbackComponent={ErrorBoundaryFallback}
		onReset={() => {
			//Reset the state of your app so the error doesn't happen again
			console.log('Try again clicked');
		}}
	>
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
			<Route path="*" element={<p>Page not found</p>} />
		</Routes>
	</ErrorBoundary>
);

export default hot(App);
