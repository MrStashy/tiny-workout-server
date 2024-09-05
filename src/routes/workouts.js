const Router = require('express')
const { getWorkoutsById, getNamedExercisesByUserId } = require('../controllers/workouts')

const router = Router()

router.get('/:id', getWorkoutsById)
router.get('/:id/:exercise', getNamedExercisesByUserId)


module.exports = router