const { Router } = require('express')
const { create } = require('../controllers/user')

const router = Router()

router.post('/', create)

module.exports = router