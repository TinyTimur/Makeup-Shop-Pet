import { connection } from '../config/db.js';

//Endpoint below is prone to SQL injections

export const getProducts = (req, res) => {
    const { type, order } = req.query;

    const allowedType = ['price', 'title', 'amount'];
    const allowedOrder = ['ASC', 'DESC'];

    const sortType = allowedType.includes(type?.toLowerCase())
        ? type.toLowerCase()
        : 'title';
    const sortOrder = allowedOrder.includes(order?.toUpperCase())
        ? order.toUpperCase()
        : 'ASC';

    const sql = `SELECT * FROM products ORDER BY ${sortType} ${sortOrder}`;

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
