const fetch = require('node-fetch');
const Data = require('../model/Data');

const cargaData = async() => {
    try {
        const response = await fetch("https://www.reddit.com/reddits.json");
        const data = await response.json();
    console.log(data.data.children);
    const datos = await Promise.all(data.data.children.map((item)=>{
         Data.create({
                title : item.data.title,
                image : item.data.header_img ?  item.data.header_img : "https://gamequitters.com/wp-content/uploads/wasting-time-on-reddit2.jpg",
                category : item.data.advertiser_category,
                description : item.data.public_description,
            
            });
        
    }));
    console.log(datos);
     

  }catch(error){
    console.log(error);
}}

module.exports = { cargaData}