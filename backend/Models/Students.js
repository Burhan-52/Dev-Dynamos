const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');


const StudentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'enter your first name'],
        max:10,
    },
    lastname:{
        type:String,
        required:[true,'enter your last name'],
        max:20,
    },
    prn:{
        type:String,
        required:[true,'Enter your prn number'],
        minLength:14,
        maxLength:14,
    },
    password:{
        type:String,
        required:[true,"plz enter your password"],
        minLength:6,
        validate:{
            validator : function(v){
                return /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{6,}$/.test(v);
            },
            message:props=>`${props.value} is not a valid password`
        }
    },
    confirmpassword:{
        type:String,
        require:[true,'Enter your password'],
        minLength:6,
        validate:{
            validator : function(v){
                return v==this.password
            },
            message:`password doesnot match`
        }
    },
    email:{
        type:String, 
        require:[true,'Enter your email'],
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
    },
    verificationToken:{
        type:String,  
    },
    verifiedDate : Date,
},{timestamps:true});


StudentSchema.pre('save',async function(){
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
StudentSchema.pre('save',function(next){
    this.confirmpassword = undefined;
    next();
})  

StudentSchema.methods.comparePassword = async function(passString){   
    const ans = await bcrypt.compare(passString,this.password);
    return ans;
}
module.exports = mongoose.model('Student',StudentSchema);