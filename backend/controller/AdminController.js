 
const adminSchema = require('../Models/Admin');
const companySchema = require('../Models/CompanySchema');
const StudentPRN = require('../Models/StudentPRN');
const custError = require('../Errors');
const crypto = require('crypto'); 
const CreateTokenUser = require('../Utils/CreateTokenUser');
const AdminToken = require('../Models/AdminToken');
const {CreateCookies}= require('../utils/jwt');

const Login = async(req,res)=>{
    
    const {email,password} = req.body;

    if(!email || !password){
        throw new custError.BadRequestError('enter the email');
    } 
    const user = await adminSchema.findOne({email});
 
    
    if(!user){
        throw new custError.BadRequestError('No user found');
    }  

    const checkPassword = await user.comparePassword(password); 
    if(!checkPassword)throw new custError.Unauthenticated('password doesnt match');
     
    const tokenuser = {email,id:user._id};
    const existingtoken = await AdminToken.findOne({user: user._id});
    if(existingtoken){
        const {isValid} = existingtoken;
        if(!isValid) throw custError.Unauthenticated('Invalid credentials');
        CreateCookies({res,user:tokenuser, refreshToken: existingtoken.refreshToken});
        res.status(200).json({user:tokenuser});
        return;
}

    let refreshtoken = "";
    refreshtoken = crypto.randomBytes(40).toString('hex');
    const userToken = {refreshToken:refreshtoken,user:user._id}
    await AdminToken.create(userToken);
    CreateCookies({res,user:tokenuser,refreshToken:refreshtoken});    
    res.status(200).json(tokenuser);
}

const register = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) throw new custError.BadRequestError('enter your email and password')
    const data = await adminSchema.create(req.body);
    res.status(200).json(data);
}

const addPrn = async(req,res)=>{
    const {prn} = req.body;
    if(!prn ){
        throw new custError.BadRequestError('enter prn number');
    }
    if(prn.length<14 || prn.length>14  ){
        throw new custError.BadRequestError('prn number not valid');
    }
    // const data = await StudentPRN.create(prn);
    res.status(200).send("hello");
}


 
module.exports = {Login,register,addPrn}