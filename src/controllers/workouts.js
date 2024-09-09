const { getWorkoutsByUserIdDb, getNamedExercisesByUserIdDb } = require("../domain/workouts");

async function getWorkoutsByUserId(req, res) {
  const userId = Number(req.params.id);
  
  try {
    const workouts = await getWorkoutsByUserIdDb(userId);
    res.status(200).json( {workouts} )
  } catch (e) {
    if (e.code === "P2025") {
        res.status(404).json({ error: "No user found with that ID" });
      }
    console.error(e)
  }
}


module.exports = { getWorkoutsByUserId };
