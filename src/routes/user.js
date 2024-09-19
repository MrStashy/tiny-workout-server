const { Router } = require('express')
const { create, getUserById, getUserByEmail, getUserByUsername } = require('../controllers/user')
const { validateLogin } = require("../middleware/validateLogin")

const router = Router()

router.post('/', create)
router.get('/id/:id', validateLogin, getUserById)
router.get('/email/:email', validateLogin, getUserByEmail)
router.get('/username/:username', validateLogin, getUserByUsername)

module.exports = router