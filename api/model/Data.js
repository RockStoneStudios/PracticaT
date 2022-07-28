const {Model,DataTypes }  = require('sequelize');
const sequelize = require('./db');

class Data extends Model {}

Data.init({
     title : {
        type : DataTypes.STRING,
        allowNull : false
     },
     image : {
        type : DataTypes.STRING,
        
     },
     color : {
        type : DataTypes.STRING
     },
     description : {
        type : DataTypes.STRING(1234),
        allowNull : false,

     }
},{
    timestamps : false,
    sequelize,
    modelName : 'Data'
},
   

)

module.exports = Data;