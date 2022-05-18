const sqlite = require('better-sqlite3');
const path = require('path');
// console.log(path.resolve('connectors.db'))
// console.log(sqlite)
// var db = new sqlite3.Database( path.resolve(__dirname, 'db.sqlite') );

const path_db = path.resolve('sqlite.db')


// console.log(path_db)
const db = new sqlite(path_db, {verbose: console.log});
console.log(db)


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