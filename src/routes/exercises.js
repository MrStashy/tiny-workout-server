const  { getNamedExercisesByUserId, getAllExercisesByUserId } = require('../controllers/exercises') 

const Router = require('express')

const router = Router()

router.get('/:id/:exercise', getNamedExercisesByUserId)
router.get('/:id', getAllExercisesByUserId)

module.exports = router