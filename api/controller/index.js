const fetch = require('node-fetch');
const Data = require('../model/Data');




   const obtenerData = async(req,res) =>{
      try {
        const datos = await Data.findAll();
       return  res.status(200).json(datos);
      }catch(error){
         res.status(500).json(error);
      }
   }

module.exports = {
    obtenerData
}