import { connection } from '../config/db.js';

import bcrypt from 'bcryptjs';

export const registerUser = (req, response) => {
    const { name, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password);

    const sql = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';

    connection.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
            response.status(500).send(err);
            return;
        }
        response.json({
            message: 'user Successfully registered',
            id: result.insertId,
        });
    });
};

export const loginUser = (req, response) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';

    connection.query(sql, [email, password], (err, result) => {
        if (err) {
            response.status(500).send(err);
        }
        if (result.length === 0) {
            return result.status(404).json({ error: 'user not found' });
        }

        const user = result[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return result.status(401).json({ error: 'Invalid password' });
        }

        result.json({ message: 'Login Successful', id: user.id });
    });
};
