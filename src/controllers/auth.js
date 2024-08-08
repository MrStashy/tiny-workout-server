const { getUserByEmailDb } = require('../domain/user')
const { validateLoginCredentials } = require('../utils/validationFunctions')

async function login (req, res) {
   const { email, password } = req.body

   const user = await getUserByEmailDb(email)
   console.log(user, password)

   if (await validateLoginCredentials(user, password)) {
    console.log('success')
   }
}

module.exports = { login }