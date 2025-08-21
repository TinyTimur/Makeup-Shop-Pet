import { connection } from '../config/db.js';

export const getUser = (req, res) => {
    console.log(req.user, 'req user');

    const sql = `SELECT id, email FROM users WHERE id = ?`;

    connection.query(sql, [req.user.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        console.log(result);
        console.log(result[0]);
        res.json(result[0]);
    });
};
