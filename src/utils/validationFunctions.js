const bcrypt = require('bcrypt')

async function validateLoginCredentials(user, password) {
    if (!user || !password ) {
        return false
    }

    const result = await bcrypt.compare(password, user.passwordHash)
    return result
}   


module.exports = { validateLoginCredentials }