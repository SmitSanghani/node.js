const jwt = require("jsonwebtoken")
const secretkey = "demo-token"

const authMiddleware = (req, res, next) => {
    try {
        const authToken = req.headers.authorization;
        const token = authToken ? authToken.split(" ")[1] : null;
        if (token) {
            let decoded = jwt.verify(token, secretkey);
            req.userID = decoded.id;
            console.log(decoded)
            next();

        } else {
            res.json({ message: "Unauthorized" });
        }
    }
    catch (err) {
        res.json({ message: err.message });
    }
}

module.exports = { authMiddleware };