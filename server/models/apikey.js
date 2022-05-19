const conector_db = require('../connectors/sqlite-connector');
const {DataTypes } = require('sequelize')

const ApiKeyModel = conector_db.define(
    'Key',
    {
        api_key: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'keys',
        createdAt: false,
        updatedAt: false
    }
)
module.exports = ApiKeyModel