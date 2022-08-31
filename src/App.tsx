import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { privateRoutes, publicRoutes } from './router';

function App() {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Routes>
					{isAuth
						? publicRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element} />
						))
						: privateRoutes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element} />
						))}
				</Routes>
			</div>
		</div>
	);
}

export default App;
