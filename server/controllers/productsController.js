import { connection } from '../config/db.js';

//Endpoint below is prone to SQL injections

export const getProducts = (req, res) => {
    const { type, order } = req.query;

    const sql = `SELECT * FROM products ORDER BY ${type} ${order}`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(result);
    });
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM products WHERE id = ?`;

    connection.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};
