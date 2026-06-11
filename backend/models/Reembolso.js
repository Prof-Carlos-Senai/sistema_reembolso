const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Reembolso = db.define('reembolso', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    ajudaCusto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    diasEmTransito: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoriaRota: {
        type: DataTypes.STRING(50), // regional, interestadual, internacional
        allowNull: false
    },
    valorAuxilio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'reembolsos'
})

module.exports = Reembolso