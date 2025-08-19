import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import express from 'express';

//Endpoint below is prone to SQL injections

// app.get('/api/products', (req, res) => {
//     const { type, order } = req.query;
//
//     const sql = `SELECT * FROM products ORDER BY ${type} ${order}`;
//
//     connection.query(sql, (err, result) => {
//         if (err) {
//             console.error(err);
//         }
//         res.json(result);
//         console.log(result);
//     });
// });
//
// app.get('/api/products/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = `SELECT * FROM products WHERE ID = ?`;
//     connection.query(sql, [id], (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//             console.log(err);
//         }
//         res.json(result);
//         console.log(result);
//     });
// });

// app.get('/api/categories', (req, res) => {
//     const sql = `SELECT * FROM categories`;
//
//     connection.query(sql, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//             return;
//         }
//         res.send(result);
//     });
// });

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

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
