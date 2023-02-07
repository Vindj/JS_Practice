const Pool = require('pg').Pool;
const pool=new Pool({
    user: "postgres",
    password:'root',
    host: 'localhost',
    port: 5342,
    // database
})

module.exports = pool