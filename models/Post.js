const { Sequelize } = require('./db')
const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.STRING
    }
})

//Post.sync({force:true})

module.exports = Post