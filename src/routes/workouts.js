const Router = require('express')
const { getWorkoutsByUserId, postNewWorkout, getWorkoutsByUserIdPaginated } = require('../controllers/workouts')
const { validateLogin } = require('../middleware/validateLogin')

const router = Router()

router.get('/:id', validateLogin, getWorkoutsByUserId)
router.get('/paginated/:id', validateLogin, getWorkoutsByUserIdPaginated)
router.post('/:id', validateLogin, postNewWorkout)


module.exports = router