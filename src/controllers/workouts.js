const { getWorkoutsByIdDb, getNamedExercisesByUserIdDb } = require("../domain/workouts");

async function getWorkoutsById(req, res) {
  const userId = Number(req.params.id);
  
  try {
    const workouts = await getWorkoutsByIdDb(userId);
    res.status(200).json( {workouts} )
  } catch (e) {
    if (e.code === "P2025") {
        res.status(404).json({ error: "No user found with that ID" });
      }
    console.error(e)
  }
}

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

module.exports = { getWorkoutsById, getNamedExercisesByUserId };
