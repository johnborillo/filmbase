import React from 'react'

const Header = () => {
	const name = 'FilmBase'

	return (
		<header className="bg-gray-800 text-white p-4">
			<h1 className="text-3xl font-bold">FilmBase</h1>
			<nav>
				<ul className="flex gap-4 mt-4">
					<li><a href="/">Home</a></li>
					<li><a href="/explore">Explore Film</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header