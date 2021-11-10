const Sequelize = require('sequelize');
// config do banco
const sequelize = new Sequelize('postapp','root','yourpasswordhere',{
    host:"localhost",
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}