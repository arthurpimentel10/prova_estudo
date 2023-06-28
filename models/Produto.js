const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    nome: {
        type: DataTypes.STRING(30)
    },
    qtd_produto: {
        type: DataTypes.INTEGER
    }, 
    preco_produto: {
        type: DataTypes.DOUBLE      
    }
},{
    createdAt: false,
    updatedAt: false
})

module.exports