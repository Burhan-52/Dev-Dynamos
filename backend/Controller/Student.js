const studentRegister = require('../Models/Students')
const custError = require('../Errors');
const crypto = require('crypto');
const sendVerificationEmail = require('../Utils/sendVerification');
const CreateTokenUser = require('../Utils/CreateTokenUser');
const TokenSchema = require('../Models/TokenSchema');
const {CreateCookies}= require('../utils/jwt');

const register =async(req,res)=>{
    const {prn,email,firstname} = req.body;
    const checkemail = await studentRegister.findOne({email:email});
    if(checkemail) throw new custError.BadRequestError('email already present')
    // const check = await AdminSchema.findOne({prn:prn});
    // if(!check){
    //     throw new custError.NotFoundError(`no prn found`);
    // } 
    const verificationToken = crypto.randomBytes(40).toString('hex');

    const user = await studentRegister.create({...req.body,verificationToken:verificationToken});
    const name = firstname;
    const origin = 'localhost:8000';
    sendVerificationEmail({name,email,verificationToken,origin});
    res.status(200).json({msg:'verification link is send to your email'});
};

const verifyEmail = async(req,res)=>{
    const {name,email,verificationToken} = req.body;
    const user = await studentRegister.findOne({email});
    if(!user)throw new custError.Unauthenticated('user doesn\'exists');
    if(user.verificationToken!==verificationToken){
        if(!user)throw new custError.Unauthenticated('user doesn\'exists');
    }
    user.verifiedDate = Date.now();
    user.isEmailVerified = true;
    user.verificationToken = '';
    await user.save();
    res.status(200).json(`${name} you are successfully verified`);
}
 
const Login = async(req,res)=>{
    
    const {email,password} = req.body;

    if(!email || !password){
        throw new custError.BadRequestError('enter the email');
    } 
    const user = await studentRegister.findOne({email:email});
 
    
    if(!user){
        throw new custError.BadRequestError('No user found');
    } 
    if(!user.isEmailVerified) throw new custError.BadRequestError('email is not verified');
    const checkPassword = await user.comparePassword(password); 
    if(!checkPassword)throw new custError.Unauthenticated('password doesnt match');
    console.log(checkPassword);
    const tokenuser = CreateTokenUser(user);
    const existingtoken = await TokenSchema.findOne({user: user._id});
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
    await TokenSchema.create(userToken);
    CreateCookies({res,user:tokenuser,refreshToken:refreshtoken});    
    res.status(200).json(tokenuser);
}


module.exports = {register,verifyEmail,Login}