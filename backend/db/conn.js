const { Sequelize } = require('sequelize')

const db = new Sequelize('db_reembolso', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db