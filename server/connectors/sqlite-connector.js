const sqlite = require('better-sqlite3');
const path = require('path');
const path_db = path.resolve('sqlite.db')

const db = new sqlite(path_db); //{verbose: console.log}

//TODO ORM !!!

function query(sql, params) {
    return db.prepare(sql).all(params);
}
function fetch(sql) {
    return db.prepare(sql).all();
}

module.exports = {
    query,
    fetch
}