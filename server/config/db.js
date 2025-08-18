import mysql2 from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

export const connection = mysql2.createConnection({
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
