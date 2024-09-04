const Router = require('express')
const { createStats } = require('../controllers/stats')

const router = Router()

router.post('/:id', createStats)

module.exports = router