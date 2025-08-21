import { connection } from '../config/db.js';
import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';

export const registerUser = (req, response) => {
    const { name, email, password } = req.body;
    // move to .env later
    const JWT_SECRET = process.env.JWT_SECRET;
    console.log(name, email, password);

    try {
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (err, result) => {
                if (err) {
                    return response.status(500).json({ error: err.message });
                }
                if (result.length > 0) {
                    return response
                        .status(400)
                        .json({ message: 'User already exists' });
                }

                const hashedPassword = bcrypt.hashSync(password);
                const sql =
                    'INSERT INTO users (name, email, password) VALUES (?,?,?)';

                connection.query(
                    sql,
                    [name.trim(), email.toLowerCase().trim(), hashedPassword],
                    (err, result) => {
                        if (err) {
                            response.status(500).json({ error: err.message });
                            return;
                        }
                        const token = jwt.sign(
                            { id: result.insertId, email: email },
                            JWT_SECRET,
                            {
                                expiresIn: '1h',
                            }
                        );

                        response.status(201).json({
                            user: {
                                id: result.insertId,
                                email: email,
                            },
                            message: 'user Successfully registered',
                            token: token,
                        });
                    }
                );
            }
        );
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

export const loginUser = (req, response) => {
    const { email, password } = req.body;
    // move to .env later
    const JWT_SECRET = process.env.JWT_SECRET;

    const sql = 'SELECT * FROM users WHERE email = ?';

    connection.query(sql, [email], (err, result) => {
        if (err) {
            response.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return response.status(404).json({ error: 'user not found' });
        }

        const user = result[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return response.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        const decoded = jwt.verify(token, JWT_SECRET);

        console.log(token, 'token in authComponent');
        console.log(decoded, 'decoded token in authComponent');

        response.json({
            message: 'user successfully logged in',
            user: { id: user.id, email: user.email },
            token: token,
        });
    });
};
