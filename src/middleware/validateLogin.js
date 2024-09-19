const jwt = require("jsonwebtoken");

async function validateLogin(req, res, next) {
    console.log(req.headers)

    try {
        const [_, token] = req.headers.authorization.split(' ')
        if (token && jwt.verify(token, process.env.JWT_SECRET)) {
            return next ()
        }
        return res.status(403).json({ error: "Invalid credentials"})
    } catch (e) {
        console.log(e)
    }

    next()
}

module.exports = {validateLogin}