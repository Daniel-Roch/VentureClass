const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.db');

process.on('SIGINT', () =>
    db.close(() => {
        console.log('[DB]: Closed');
        process.exit(0);
    })
);

module.exports = db;