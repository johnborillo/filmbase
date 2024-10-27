import React, { useState } from 'react'
import getCorsProxyUrl from '../../utilities/getProxyUrl'
import filmStockIDs from '../../data/filmStockIDs'
import { Button } from '@/components/ui/button'
import FilmStockButton from '@/components/ui/film-stock-button'
import FilmStockInput from '@/components/ui/film-stock-input'
import { Input } from '@/components/ui/input'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ExploreFilm = () => {
	const [searchedFilm, setSearchedFilm] = useState([])
	const [filmStock, setFilmStock] = useState('')
	const [loading, setLoading] = useState(false)
	const [matchingFilmStockCount, setMatchingFilmStockCount] = useState(0)

	const fetchfilmStockPhotos = async (film) => {
		const res = await fetch(`api/filmstock/${film}`, )
		const data = await res.json()
		return data.photos
	}

	async function getFilmStock () {
		if (filmStock === '') {
			alert('Please enter a film stock')
			return
		}

		const matchingFilmStocks = filmStockIDs.filter(film => film.name.toLowerCase().includes(filmStock.toLowerCase()))
		setMatchingFilmStockCount(matchingFilmStocks.length)
		console.log(matchingFilmStocks)
		if (matchingFilmStocks.length === 0) {
			alert('No matching film stocks found')
			return
		}

		setLoading(true)
		setSearchedFilm([])

		const filmPromises = matchingFilmStocks.map(async (film) => {
			const photos = await fetchfilmStockPhotos(film.id)
			return {
				name: film.name,
				photos
			}
		})
    
		const filmInfos = await Promise.all(filmPromises)
		setSearchedFilm(prevSearchedFilm => [...prevSearchedFilm, ...filmInfos])

		setLoading(false)
	}

	return (
		<div className='p-6 bg-gray-100 min-h-screen'>
			<div className='mb-6'>
				<h1 className='font-bold text-4xl mb-4 text-center text-gray-800'>Explore Film Characteristics Here!</h1>
				<p className='mb-6 text-center text-gray-600'>Discover new and exciting films here!</p>
				<div className='flex gap-4 items-center justify-center'>
					<FilmStockInput 
						label="Search Film Stocks" 
						placeholder="e.g., Kodak Portra 400" 
						onChange={(e) => {
							setFilmStock(e.target.value)
						}}
						calledFunction={getFilmStock}
						className="w-80"
					/>
					<FilmStockButton onClick={getFilmStock} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">Explore Film Stock!</FilmStockButton>
				</div>
			</div>
			{loading ? 
				<div className='flex justify-center items-center mt-6' role="status">
					<p className='text-gray-700 mr-2'>Loading {matchingFilmStockCount} film {matchingFilmStockCount === 1 ? 'stock' : 'stocks'}!</p>
					<svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
					</svg>
					<span className="sr-only">Loading...</span>
				</div>
				:
				<div className='flex flex-col gap-6'>
					{searchedFilm.map(film => (
						<div key={film.name} className='p-6 border rounded-md shadow-md bg-white'>
							<h2 className='font-semibold text-2xl mb-4 text-gray-800'>{film.name}</h2>
							<div className='flex gap-4 flex-wrap'>
								{film.photos.slice(0, 10).map(photo => (
									<div key={photo.id} className="relative group w-80 h-80">
										<LazyLoadImage
											src={photo.assets.large.url}
											width={200} height={200}
											alt={photo.name}
											className="w-full h-full object-cover rounded-md shadow-md"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-md" onClick={() => {
											window.open(photo.url)
										}}>
											<span className="text-white hover:underline cursor-pointer" onClick={(e) => {
												e.stopPropagation()
												window.open(photo.user.url)
											}}>{photo?.user?.username}</span>
											<span className="text-white">{photo?.camera?.name}</span>
											<span className="text-white">{photo?.lens?.name}</span>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			}
		</div>
	)
}

export default ExploreFilm