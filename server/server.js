import express from 'express';
import mysql2 from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to DB', error);
        return;
    }
    console.log('Connected to DB');
});

app.get('/api/products', (req, res) => {
    const { type, order } = req.query;

    const sql = `SELECT * FROM products ORDER BY ${type} ${order}`;

    connection.query(sql, (err, result) => {
        if (err) {
            console.error(err);
        }
        res.send(result);
    });
});

app.get('/api/categories', (req, res) => {
    const sql = `SELECT * FROM categories`;

    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send(result);
    });
});

// app.get('/api/products/:category_id', (req, res) => {
//     const { category_id } = req.params;
//     const sql = 'SELECT * FROM products WHERE category_id = ?';
//
//     connection.query(sql, [category_id], (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//             return;
//         }
//         res.send(result);
//         console.log('successfully retrieved products');
//     });
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
