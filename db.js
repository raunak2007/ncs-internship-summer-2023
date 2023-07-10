const { Pool } = require('pg');

// Create a new pool instance with the PostgreSQL connection details
const pool = new Pool({
  user: 'example',
  password: 'example',
  host: 'my-app-db', // Docker service name defined in docker-compose.yml
  database: 'mydb',
  port: 5432,
});

// Export the pool to use it in other modules
module.exports = pool;
