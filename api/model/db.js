const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('proyect-pract','root','3105060237',{
     host : 'localhost',
     dialect : 'mysql'
});


module.exports = sequelize;