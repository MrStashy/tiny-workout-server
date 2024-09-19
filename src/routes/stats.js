const Router = require('express')
const { createStats } = require('../controllers/stats')
const { validateLogin } = require('../middleware/validateLogin')

const router = Router()

router.post('/:id', validateLogin, createStats)

module.exports = router