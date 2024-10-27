import React from 'react'
import { Film, Home, Info, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
	const name = 'FilmBase'

	return (
		<header className="bg-stone-800 text-stone-100 p-4 shadow-md">
			<div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
				<a href="/" className="text-2xl font-bold tracking-tight">
					<div className="flex items-center mb-4 sm:mb-0">
						<Film className="h-8 w-8 mr-2" />
						<h1 className="text-3xl font-bold tracking-tight">{name}</h1>
					</div>
				</a>
				<nav>
					<ul className="flex flex-wrap justify-center gap-2">
						<li>
							<Button variant="ghost" size="sm" asChild>
								<a href="/" className="flex items-center">
									<Home className="h-4 w-4 mr-2" />
                  Home
								</a>
							</Button>
						</li>
						<li>
							<Button variant="ghost" size="sm" asChild>
								<a href="/explore" className="flex items-center">
									<Film className="h-4 w-4 mr-2" />
                  Explore Film
								</a>
							</Button>
						</li>
						<li>
							<Button variant="ghost" size="sm" asChild>
								<a href="/about" className="flex items-center">
									<Info className="h-4 w-4 mr-2" />
                  About
								</a>
							</Button>
						</li>
						<li>
							<Button variant="ghost" size="sm" asChild>
								<a href="/contact" className="flex items-center">
									<Mail className="h-4 w-4 mr-2" />
                  Contact
								</a>
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header