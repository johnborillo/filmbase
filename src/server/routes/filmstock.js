import express from 'express'
import getCorsProxyUrl from '../../../utilities/getProxyUrl.js'
const router = express.Router()
import dotenv from 'dotenv'
dotenv.config()

router.get('/filmstock', (req, res) => {
	res.json({ message: 'Hello from the server!' })
})

router.get('/filmstock/:film', async (req, res) => {
	const { film } = req.params

	// eslint-disable-next-line no-undef
	const response = await fetch(`${getCorsProxyUrl()}http://api.lomography.com/v1/films/${film}/photos/recent?api_key=${process.env.VITE_LOMOGRAPHY_API_KEY}`)
	const data = await response.json()

	res.json({ message: 'Hello from the server!', photos: data.photos })
})

export default router