const { getWorkoutsByIdDb } = require("../domain/workouts");

async function getWorkoutsById(req, res) {
  const userId = Number(req.params.id);
  try {
    const workouts = await getWorkoutsByIdDb(userId);
    res.status(200).json( {workouts} )
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getWorkoutsById };
