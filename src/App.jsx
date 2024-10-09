import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ExploreFilm from './pages/ExploreFilm'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './layouts/Header'

export default function App () {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<ExploreFilm />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	)
}