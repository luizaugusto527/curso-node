const Sequelize = require('sequelize');
// config do banco
const sequelize = new Sequelize('postapp','root','yourpassowordhere',{
    host:"localhost",
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}