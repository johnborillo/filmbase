import express from 'express'
const router = express.Router()

import filmstock from './filmstock.js'

router.use(filmstock)

export default router