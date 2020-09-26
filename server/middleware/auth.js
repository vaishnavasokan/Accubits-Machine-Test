const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    console.log(req.headers.authorization);
    if (req.headers.authorization) {
        try {
            const decoded = jwt.verify(req.headers.authorization, 'apiToken')
            console.log("decoded  : ", decoded)
            next()
        }
        catch {
            res.status(401).json({ statusCode: 401, message: 'Unauthorized Access' })
        }
    }
    else {
        res.status(401).json({ statusCode: 401, message: 'Unauthorized Access' })
    }
}

module.exports = authMiddleware;