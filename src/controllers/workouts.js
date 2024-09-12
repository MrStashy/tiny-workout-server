const { getWorkoutsByUserIdDb, postNewWorkoutDb, getWorkoutsByUserIdPaginatedDb } = require("../domain/workouts");

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

async function postNewWorkout(req, res) {
  const workout = req.body
  const id = Number(req.params.id)

  if (workout.length === 0) {
    res.status(400).json({ error: "You can't submit an empty workout" });
  }

  try {
    const newWorkout = await postNewWorkoutDb(workout, id)
    res.status(200).json({ newWorkout })
  } catch (e) {
    console.error(e)
    res.status(403).json({ error: "Unable to save workout"})
  }
}

async function getWorkoutsByUserIdPaginated(req, res) {
  const pageNo = Number(req.query.pageNo)
  const perPage = Number(req.query.perPage)
  const userId = Number(req.params.id)


  try {
    const workouts = await getWorkoutsByUserIdPaginatedDb(userId, pageNo, perPage)
    res.status(200).json({ workouts })
  } catch (e) {
    console.log(e)
  }
}

module.exports = { getWorkoutsByUserId, postNewWorkout, getWorkoutsByUserIdPaginated };
