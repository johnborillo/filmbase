import express from 'express'
const router = express.Router()
import filmstockController from '../controllers/filmstockControllers.js'

router.get('/', filmstockController.getFilmstock )
router.get('/:filmId', filmstockController.getFilmstockId )

export default router