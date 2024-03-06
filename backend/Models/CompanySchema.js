const mongoose = require("mongoose");

const companyPostSchema = mongoose.Schema({
companyname:{
    type:String,
    required:[true,"company name is missing"]
},
  title: {
    type: String,
    required: true,
  },
  
  eligibilityCriteria: {
    type: Number,
    max:10,
    required: true,
  },
  description:{
    type:String,
    required:true,
  },
  startDate:{
    type:String,
    required:true,
  },
  endDate:{
    type:String,
    required:true,
  }
  
});

module.exports =  mongoose.model("companyPosts", companyPostSchema);