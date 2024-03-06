const mongoose = require('mongoose');

const StudentPRN = new mongoose.Schema({
    prn:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('PRN',StudentPRN);