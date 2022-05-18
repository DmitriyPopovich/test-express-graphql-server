const sqlite = require('better-sqlite3');
const path = require('path');
const path_db = path.resolve('sqlite.db')

const db = new sqlite(path_db, {verbose: console.log}); //{verbose: console.log}

//TODO ORM !!!

function query(sql, params) {
    return db.prepare(sql).all(params);
}
function fetch(sql) {
    return db.prepare(sql).all();
}
function run(sql) {
    return db.exec(sql);
}


module.exports = {
    query,
    fetch,
    run
}


//
// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database('./database/sq-lite-data-base.db', (err) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     console.log("Connected to database!")
// });
//
// // Create table named 'users' with two columns: 1 - 'name' which values to be of type "text",
// // and "age" of type "integer"
// // db.run('CREATE TABLE users(name text, age integer)'); //When this line is not connected I get different error: "The table users already exists"
//
// // Insert two rows to table "users"
// db.run('INSERT INTO users(name, age) VALUES("Riko", 29)', ['C'], (err) => {
//     if(err) {
//         return console.log(err.message);
//     }
//     console.log('Row was added to the table: ${this.lastID}');
// })