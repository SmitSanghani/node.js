const authMiddleware = (req, res, next) => {
    try {
        const login = req.headers.login;
        if (login) {
            next();
        } else {
            res.json({ message: "Unauthorized" });
        }
    }
    catch {
        res.json({ message: "Unauthorized " });
    }
}

module.exports = { authMiddleware };