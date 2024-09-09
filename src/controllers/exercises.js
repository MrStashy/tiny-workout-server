const { getNamedExercisesByUserIdDb, getAllExercisesByUserIdDb } = require('../domain/exercises')

async function getNamedExercisesByUserId(req, res) {
    const userId = Number(req.params.id);
    const exercise = req.params.exercise
    
    try {
        const exercises = await getNamedExercisesByUserIdDb(userId, exercise)
        res.status(200).json( { exercises } )
    } catch (e) {
        console.log(e)
    }
   
  }

  async function getAllExercisesByUserId(req, res) {
    const userId = Number(req.params.id)

    try {
        const data = await getAllExercisesByUserIdDb(userId)
        const exercises = [...new Set(data.map(exercise => exercise.name))];
        res.status(200).json( { exercises } )
    } catch (e) {
        console.log(e)
    }
  }

  module.exports = { getNamedExercisesByUserId, getAllExercisesByUserId }