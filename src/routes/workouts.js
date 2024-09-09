const Router = require('express')
const { getWorkoutsByUserId } = require('../controllers/workouts')

const router = Router()

router.get('/:id', getWorkoutsByUserId)


module.exports = router