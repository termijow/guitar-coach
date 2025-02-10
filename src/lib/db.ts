import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'asdasdasd',
    password: '0xcwaqsAP1234!',
    database: 'guitar_coach',
});
