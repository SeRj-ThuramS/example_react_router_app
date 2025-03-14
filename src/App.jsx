import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;