const Router = require('express')
const { getWorkoutsByUserId, postNewWorkout } = require('../controllers/workouts')

const router = Router()

router.get('/:id', getWorkoutsByUserId)
router.post('/:id', postNewWorkout)


module.exports = router