import express from 'express'
import ViteExpress from 'vite-express'
import filmstockRoutes from './routes/filmstock.js'

const app = express()
// eslint-disable-next-line no-undef
ViteExpress.config({ mode: process.env.VITE_NODE_ENV })

app.use(express.json())

app.use('/filmstock', filmstockRoutes)

ViteExpress.listen(app, 3000, () => console.log(
	'Server running at http://localhost:3000'
))