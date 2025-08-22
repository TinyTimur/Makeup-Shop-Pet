import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const userMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'no Token provided' });
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Invalid or expired token',
            message: error.message,
        });
    }
};
