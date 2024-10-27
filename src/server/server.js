import express from 'express'
import ViteExpress from 'vite-express'
import routes from './routes/index.js'

const app = express()
// eslint-disable-next-line no-undef
ViteExpress.config({ mode: process.env.VITE_NODE_ENV })

app.use('/api', routes)

ViteExpress.listen(app, 3000, () => console.log(
	'Server running at http://localhost:3000'
))