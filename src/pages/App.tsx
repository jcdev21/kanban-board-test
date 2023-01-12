import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuardRoute from '../modules/auth/GuardRoute';
import NotFound from './404';

const Kanban = React.lazy(() => import('./Kanban'));
const Register = React.lazy(() => import('./Register'));
const Login = React.lazy(() => import('./Login'));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<GuardRoute />}>
					<Route
						path="/"
						element={
							<React.Suspense fallback={<>Loading...</>}>
								<Kanban />
							</React.Suspense>
						}
					/>
				</Route>
				<Route
					path="/register"
					element={
						<React.Suspense fallback={<>Loading...</>}>
							<Register />
						</React.Suspense>
					}
				/>
				<Route
					path="/login"
					element={
						<React.Suspense fallback={<>Loading...</>}>
							<Login />
						</React.Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
