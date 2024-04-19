import React from 'react';
import Calculator from './Calculator';
import CalculatorFinished from './finished/Calculator';
import { NavLink, Route, Routes } from 'react-router-dom';

const LabManager = () => {
	return (
		<>
			<h2>Lab 6: Testing state</h2>
			<nav className="flatnav">
				<ul>
					<li>
						<NavLink to="/labs/yours">Yours</NavLink>
					</li>
					<li>
						<NavLink to="/labs/finished">Finished</NavLink>
					</li>
				</ul>
			</nav>
			<section className="lab-container">
				<Routes>
					<Route
						path="/yours"
						element={<Calculator />}
					/>
					<Route
						path="/finished"
						element={<CalculatorFinished />}
					/>
				</Routes>
			</section>
		</>
	);
};

export default LabManager;
