import { Pool } from 'pg';
let conn: any;

if (!conn){

conn = new Pool({
    user: 'postgres',
    password: 'admin',
    host: '192.168.0.102',
    port: 5432,
    database: 'sigevi'
});
}

export { conn };