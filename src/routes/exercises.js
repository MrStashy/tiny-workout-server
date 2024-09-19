const  { getNamedExercisesByUserId, getAllExercisesByUserId } = require('../controllers/exercises') 
const { validateLogin } = require('../middleware/validateLogin')

const Router = require('express')

const router = Router()

router.get('/:id/:exercise', validateLogin, getNamedExercisesByUserId)
router.get('/:id', validateLogin, getAllExercisesByUserId)

module.exports = router