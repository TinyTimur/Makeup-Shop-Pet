import { connection } from '../config/db.js';

import bcrypt from 'bcryptjs';

export const registerUser = (req, response) => {
    const { name, email, password } = req.body;

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
                        response.status(201).json({
                            message: 'user Successfully registered',
                            id: result.insertId,
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

        response.json(result);
    });
};
