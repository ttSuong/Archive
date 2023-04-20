import React from 'react';
import './App.css';
import {
	Routes,
	Route,
	Outlet,
	BrowserRouter
} from "react-router-dom";
import Home from './Home';
import Share from './Share';
import Header from './Header';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div><Header /> <Outlet /></div>}>
					<Route index element={<Home />} />
					<Route path="/share" element={<Share />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
