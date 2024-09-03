const { addStatsDb } = require("../domain/stats");

async function addStats(req, res) {
  const userId = Number(req.params.id);
  const height = Number(req.body.height);
  const weight = Number(req.body.weight);

  try {
    const stats = await addStatsDb(userId, height, weight);
    res.status(200).json({ stats })
  } catch (e) {
    if(e.code === "P2002")
    res.status(403).json({ error: "This user already has stats" });
    if(e.code === "P2025")
    res.status(403).json({ error: "No profile found for that user" });
    console.error(e);
  }
}

module.exports = { addStats };
