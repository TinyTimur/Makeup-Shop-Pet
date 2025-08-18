import { connection } from '../config/db.js';

export const getAllCategories = (req, response) => {
    const sql = 'SELECT * FROM categories';

    connection.query(sql, (err, result) => {
        if (err) {
            response.status(500).json({ error: err.message });
        }
        response.json(result);
    });
};
