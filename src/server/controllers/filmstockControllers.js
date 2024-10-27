import getCorsProxyUrl from '../../../utilities/getProxyUrl.js'

export async function getFilmstock (req, res) {
	try {
		console.log('Fetching popular filmstocks...')
		// eslint-disable-next-line no-undef
		const response = await fetch(`${getCorsProxyUrl()}http://api.lomography.com/v1/photos/popular?api_key=${process.env.VITE_LOMOGRAPHY_API_KEY}`)
		const data = await response.json()

		console.log(data)

		res.send({ message: 'Hello from the server!', photos: data.photos })
	} catch (error) {
		console.log(error)
		res.status(500).send({ error: 'An error occurred while fetching popular filmstocks.' })
	}
}

export async function getFilmstockId (req, res) {
	try {
		const { filmId } = req.params

		// eslint-disable-next-line no-undef
		const response = await fetch(`${getCorsProxyUrl()}http://api.lomography.com/v1/films/${filmId}/photos/recent?api_key=${process.env.VITE_LOMOGRAPHY_API_KEY}`)
		const data = await response.json()

		res.send({ message: 'Hello from the server!', photos: data.photos })
	} catch (error) {
		res.status(500).send({ message: 'An error occurred while fetching filmstock by ID.' })
	}
}

export default { getFilmstock, getFilmstockId }