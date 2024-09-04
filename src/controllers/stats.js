const { createStatsDb } = require("../domain/stats");

async function createStats(req, res) {
  const userId = Number(req.params.id);
  const height = Number(req.body.height);
  const weight = Number(req.body.weight);
  const dob = new Date(req.body.dob)

  try {
    const stats = await createStatsDb(userId, height, weight, dob);
    res.status(200).json({ stats })
  } catch (e) {
    if(e.code === "P2002")
    res.status(403).json({ error: "This user already has stats" });
    if(e.code === "P2025")
    res.status(403).json({ error: "No user found with that ID" });
    console.error(e);
  }
}

module.exports = { createStats };
