const { Router } = require('express')
const { create, getUserById, getUserByEmail, getUserByUsername } = require('../controllers/user')

const router = Router()

router.post('/', create)
router.get('/id/:id', getUserById)
router.get('/email/:email', getUserByEmail)
router.get('/username/:username', getUserByUsername)

module.exports = router