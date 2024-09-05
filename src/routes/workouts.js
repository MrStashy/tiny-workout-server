const Router = require('express')
const { getWorkoutsById } = require('../controllers/workouts')

const router = Router()

router.get('/:id', getWorkoutsById)

module.exports = router