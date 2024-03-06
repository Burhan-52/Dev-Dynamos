 
 const mongoose = require('mongoose')

const connectToMongo = async (url) => {
    return mongoose.connect(url).then(()=>console.log("connect to db"))
  
};

module.exports =  connectToMongo;
