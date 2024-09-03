const Router = require('express')
const { addStats } = require('../controllers/stats')

const router = Router()

router.post('/:id', addStats)

module.exports = router