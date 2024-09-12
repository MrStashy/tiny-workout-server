const Router = require('express')
const { getWorkoutsByUserId, postNewWorkout, getWorkoutsByUserIdPaginated } = require('../controllers/workouts')

const router = Router()

router.get('/:id', getWorkoutsByUserId)
router.get('/paginated/:id', getWorkoutsByUserIdPaginated)
router.post('/:id', postNewWorkout)


module.exports = router