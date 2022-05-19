const { Sequelize } = require('sequelize')
const path = require('path');
const path_db = path.resolve('sqlite_1.db')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path_db
})

sequelize.authenticate()
    .then(res=>console.log('Соединение с БД было успешно установлено'))
    .catch(e=>console.log('Невозможно выполнить подключение к БД: ', e))

module.exports = sequelize
