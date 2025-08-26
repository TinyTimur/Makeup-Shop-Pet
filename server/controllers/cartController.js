import { connection } from '../config/db.js';

export function postCart(req, res) {
    const sql = `INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?);`;
    const { user_id, items } = req.body;
    console.log(req.body);

    const promises = items.map(({ product_id, quantity }) => {
        return new Promise((resolve, reject) => {
            connection.query(
                sql,
                [user_id, product_id, quantity],
                (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                }
            );
        });
    });

    Promise.all(promises)
        .then(() => {
            res.status(200).json({ message: 'success' });
        })
        .catch((error) => res.status(500).json({ error: error.message }));
}
