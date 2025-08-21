import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    console.log(token);

    if (!token) {
        return res.status(401).json({ error: 'no Token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = jwt.verify(token, JWT_SECRET);
        console.log(
            req.user,
            'Req.user in AuthMiddleware',
            decoded,
            'decoded token'
        );
        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Invalid or expired token',
            message: error.message,
        });
    }
};
