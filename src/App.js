
import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

import { Routes, Link, Route, useLocation } from "react-router-dom";

import Portfolio from './pages/portfolio'
import Blog from './pages/blog'


function App() {
	const location = useLocation();
	console.log(location)
	return (
		<TransitionGroup component={null}>
			<CSSTransition key={location.key} className="fade" timeout={300}>
				<Routes location={location}>
					<Route path="/" element={<Link className="link" to="/portfolio">portfolio</Link>} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default App;
