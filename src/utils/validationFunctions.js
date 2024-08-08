const bcrypt = require('bcrypt')

async function validateLoginCredentials(user, password) {
    if (!user || !password ) {
        return false
    }

    return await bcrypt.compare(password, user.passwordHash)
}   


module.exports = { validateLoginCredentials }