const app = require('./app');
const db = require('./model/db');
const {cargaData} = require('./model/cargaData');

app.listen(process.env.PORT,()=>{ 
    
      db.sync({force : false}).then(()=>{
          console.log('Database Connected Sucessfull');
      }).catch(error =>{
          console.log(error);
      });
      cargaData();
     console.log('Starting Server on Port   --> '+process.env.PORT+ ' . . .');
});

