const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const PASSWORD = process.env.PASSWORD_PG;

const pool = new Pool({
    user: 'postgres',
    password: PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'filmdb'
}
);

module.exports = pool;