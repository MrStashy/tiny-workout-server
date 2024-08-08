const { Router } = require('express')
const { create, getUserById, getUserByEmail } = require('../controllers/user')

const router = Router()

router.post('/', create)
router.get('/:id', getUserById)
router.get('/', getUserByEmail)

module.exports = router