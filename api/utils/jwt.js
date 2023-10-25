import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("head", authHeader)
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            console.log("token", token)
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json({ error: 'Forbidden' });
                }
                req.user = user;
                next();
            });
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message, "message": "Token not found" })
    }

}
export { generateToken, verifyToken }